import React,{useContext} from 'react';
import PropTypes from 'prop-types';
import { useTheme } from '@mui/material/styles';
import Box from '@mui/material/Box';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableFooter from '@mui/material/TableFooter';
import TablePagination from '@mui/material/TablePagination';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import IconButton from '@mui/material/IconButton';
import FirstPageIcon from '@mui/icons-material/FirstPage';
import KeyboardArrowLeft from '@mui/icons-material/KeyboardArrowLeft';
import KeyboardArrowRight from '@mui/icons-material/KeyboardArrowRight';
import LastPageIcon from '@mui/icons-material/LastPage';
import TableHead from '@mui/material/TableHead';
import ThemeContext from "../context/theme/ThemeContext";


function createData(name, calories, fat, carbs, protein) {
  return { name, calories, fat, carbs, protein };
}

const rows = [
  createData('07:00 AM', 159, 6.0, 24, 4.0),
  createData('07:00 AM', 237, 9.0, 37, 4.3),
  createData('07:00 AM', 262, 16.0, 24, 6.0),
  createData('07:00 AM', 305, 3.7, 67, 4.3),
  createData('07:00 AM', 356, 16.0, 49, 3.9),
  createData('07:00 AM', 356, 16.0, 49, 3.9),
  createData('07:00 AM', 356, 16.0, 49, 3.9),
  createData('07:00 AM', 356, 16.0, 49, 3.9),
  createData('07:00 AM', 356, 17.0, 49, 3.9),
  createData('07:00 AM', 356, 16.0, 49, 3.9),

   createData('07:00 AM', 356, 16.0, 49, 3.9),
    createData('07:00 AM', 356, 16.0, 49, 3.9),
];

function TablePaginationActions(props) {
    const theme = useTheme();
    const { count, page, rowsPerPage, onPageChange } = props;
  
    const handleFirstPageButtonClick = (event) => {
      onPageChange(event, 0);
    };
  
    const handleBackButtonClick = (event) => {
      onPageChange(event, page - 1);
    };
  
    const handleNextButtonClick = (event) => {
      onPageChange(event, page + 1);
    };
  
    const handleLastPageButtonClick = (event) => {
      onPageChange(event, Math.max(0, Math.ceil(count / rowsPerPage) - 1));
    };
  
    return (
      <Box sx={{ flexShrink: 0, ml: 2.5 }}>
        <IconButton
          onClick={handleFirstPageButtonClick}
          disabled={page === 0}
          aria-label="first page"
        >
          {theme.direction === 'rtl' ? <LastPageIcon /> : <FirstPageIcon />}
        </IconButton>
        <IconButton
          onClick={handleBackButtonClick}
          disabled={page === 0}
          aria-label="previous page"
        >
          {theme.direction === 'rtl' ? <KeyboardArrowRight /> : <KeyboardArrowLeft />}
        </IconButton>
        <IconButton
          onClick={handleNextButtonClick}
          disabled={page >= Math.ceil(count / rowsPerPage) - 1}
          aria-label="next page"
        >
          {theme.direction === 'rtl' ? <KeyboardArrowLeft /> : <KeyboardArrowRight />}
        </IconButton>
        <IconButton
          onClick={handleLastPageButtonClick}
          disabled={page >= Math.ceil(count / rowsPerPage) - 1}
          aria-label="last page"
        >
          {theme.direction === 'rtl' ? <FirstPageIcon /> : <LastPageIcon />}
        </IconButton>
      </Box>
    );
  }
  
  TablePaginationActions.propTypes = {
    count: PropTypes.number.isRequired,
    onPageChange: PropTypes.func.isRequired,
    page: PropTypes.number.isRequired,
    rowsPerPage: PropTypes.number.isRequired,
  };
  


export default function TableOne() {

  const a = useContext(ThemeContext);

    const [page, setPage] = React.useState(0);
    const [rowsPerPage, setRowsPerPage] = React.useState(5);
  
    // Avoid a layout jump when reaching the last page with empty rows.
    const emptyRows =
      page > 0 ? Math.max(0, (1 + page) * rowsPerPage - rows.length) : 0;
  
    const handleChangePage = (event, newPage) => {
      setPage(newPage);
    };
  
    const handleChangeRowsPerPage = (event) => {
      setRowsPerPage(parseInt(event.target.value, 10));
      setPage(0);
    };
  return (
    <TableContainer component={Paper} style={{ backgroundColor: a.state ? '#303134' : 'white'}}>
      <Table sx={{ minWidth: 100 }} size="small" aria-label="a dense table">
        <TableHead style={{backgroundColor: a.state ? '#303134' : 'white'}}>
          <TableRow style={{backgroundColor: a.state ? 'red' : 'red'}}>
            <TableCell style={{color:"white"}}>Timings</TableCell>
            <TableCell style={{color:"white"}} align="right">Mall-FF(Today)</TableCell>
            <TableCell style={{color:"white"}} align="right">Mall-FF(Yesterday)</TableCell>
            <TableCell style={{color:"white"}} align="right">FC-FF(Today)</TableCell>
            <TableCell style={{color:"white"}} align="right">FC-FF(Yesterday)</TableCell>
          </TableRow>
          <TableRow style={{backgroundColor: a.state ? '#303134' : 'white'}}>
            <TableCell style={{color:"blue"}}>Total</TableCell>
            <TableCell style={{color:"blue"}} align="right">195</TableCell>
            <TableCell style={{color:"blue"}} align="right">4,972</TableCell>
            <TableCell style={{color:"blue"}} align="right">16,016</TableCell>
            <TableCell style={{color:"blue"}} align="right">455</TableCell>
          </TableRow>
        </TableHead>
        <TableBody style={{backgroundColor:  a.state ? '#303134' : 'white'}}>
          {(rowsPerPage > 0
            ? rows.slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage)
            : rows
          ).map((row) => (
            <TableRow
              key={row.name}
              sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
              
            >
              <TableCell component="th" scope="row" style={{color: a.state ? "white" : "black"}}>
                {row.name}
              </TableCell>
              <TableCell align="right" style={{color: a.state ? "white" : "black"}}>{row.calories}</TableCell>
              <TableCell align="right" style={{color: a.state ? "white" : "black"}}>{row.fat}</TableCell>
              <TableCell align="right" style={{color: a.state ? "white" : "black"}}>{row.carbs}</TableCell>
              <TableCell align="right" style={{color: a.state ? "white" : "black"}}>{row.protein}</TableCell>
            </TableRow>
          ))}
         
        </TableBody>
        <TableFooter style={{backgroundColor: a.state ? '#303134' : 'white' ,color: a.state ? "white" : "black"}}>
          <TableRow style={{backgroundColor: a.state ? '#303134' : 'white' ,color: a.state ? "white" : "black"}}>
            <TablePagination
            style={{backgroundColor: a.state ? '#303134' : 'white',color: a.state ? "white" : "black"}}
             // rowsPerPageOptions={[5, 10, 25, { label: 'All', value: -1 }]}
              colSpan={3}
              count={rows.length}
              rowsPerPage={rowsPerPage}
              page={page}
            //   SelectProps={{
            //     inputProps: {
            //       'aria-label': 'rows per page',
            //     },
            //     native: true,
            //   }}
              onPageChange={handleChangePage}
             onRowsPerPageChange={handleChangeRowsPerPage}
              ActionsComponent={TablePaginationActions}
            />
          </TableRow>
        </TableFooter>
      </Table>
    </TableContainer>
  );
}