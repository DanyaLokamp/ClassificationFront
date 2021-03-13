import React, { useEffect, useState } from 'react';
import { DataGrid } from '@material-ui/data-grid';
import * as selectors from '../store/selectors'
import * as classifierLogic from '../logic/classifier'
import * as articleLogic from '../logic/article'
import { useDispatch, useSelector } from "react-redux";
import Button from '@material-ui/core/Button';
import ModalDialog from './ModalDialog'
import DatePicker from './DatePicker'
import './Articles.css'
export default function ArticlesGrid() { 
  const dispatch = useDispatch();
  const [rows, setRows] = useState([]);

  const getCurrentDate = () => {
    var d = new Date().toISOString().slice(0, 10);

    return d;
  }

  const subtractMonthsFromToday = (months) => {
    var d = new Date();
    d.setMonth(d.getMonth() - months);

    return d.toISOString().slice(0, 10);
  }
  
  let defaultDateFrom = subtractMonthsFromToday(3);
  let defaultDateTo = getCurrentDate();

  const [dateFrom, setDateFrom] = useState(defaultDateFrom);
  const [dateTo, setDateTo] = useState(defaultDateTo);

  const [currentRow, setCurrentRow] = useState(null)
  const [isBtnPressed, setBtnPressed] = useState(false);
  const [columns, setColumns] = useState([
      { field: 'id', headerName: 'ID', width: 100 }, 
      { field: 'article_id', headerName: 'Номер статьи', width: 100 }, 
      { field: 'author', headerName: 'Автор', width: 180 },
      { field: 'date_published', headerName: 'Дата публикации', width: 180 },
      { field: 'title', headerName: 'Заголовок', width: 650 },
      { field: 'tag', headerName: 'Класс', width: 120 },
      { field: 'url', headerName: 'Ссылка', width: 150,
        renderCell: (params) => (<a onClick={(e) => handleUrlClick(e, params.getValue("url"))} href={params.getValue("url")}>Оригинал статьи</a>) },
      { field: 'article_text', headerName: 'Текст статьи', hide: true },
      { field: 'btn_text', headerName: 'Текст', width: 100,
        renderCell: (params) => (
            <strong>
                <Button
                    onClick={() => handleClick(params.row)}
                    variant="contained"
                    color="primary"
                    size="small"
                    style={{ marginLeft: 16 }}>
                    Текст
                </Button>
            </strong>
        ), 
    },
  ]);

  const handleUrlClick = (e, url) => {
    e.preventDefault();
    window.open(url);
  }

  const handleClick = (row) => {
    console.log(row)
    if (row) {
        setCurrentRow(row);
        setBtnPressed(true);
    }
  }

  useEffect(() => {
      console.log('От: ', dateFrom)
      console.log('До: ', dateTo)
  }, [dateFrom, dateTo])

  const { articles } = useSelector(
    (state) => ({
        articles: selectors.getArticles(state),
    }));

  useEffect(() => {
    if(dateFrom && dateTo)
      setRows([])
      dispatch(articleLogic.getArticles(dateFrom, dateTo));
  }, [])

  const handleBtnDateClick = () => {
    if (dateFrom && dateTo) {
      setRows([])
      dispatch(articleLogic.getArticles(dateFrom, dateTo));
    }
  }

  useEffect(() => {
    if (articles) 
      setRows(articles);
  }, [articles])

  const sortModel = [
    {
      field: 'date_published',
      sort: 'desc',
    },
  ];
  

  return (
    <div>
      <div className="wrapper">
        <DatePicker label='От' defaultDate={defaultDateFrom} setDate={setDateFrom}/>
        <DatePicker label='До' defaultDate={defaultDateTo} setDate={setDateTo}/>
        <button className="button-date"
          onClick={() => handleBtnDateClick()}>
            Отфильтровать по дате
        </button>
      </div>
      <div style={{ height: window.screen.height-270, width: '100%' }}>
        {articles ? <DataGrid sortModel={sortModel} pageSize={12} rowsPerPageOptions={[12, 25, 50]} columns={columns} rows={rows}/> : null}
        {isBtnPressed ? <ModalDialog isOpen={isBtnPressed} row={currentRow} setBtnPressedState={setBtnPressed}/> : null}
      </div>
    </div>
  );
}