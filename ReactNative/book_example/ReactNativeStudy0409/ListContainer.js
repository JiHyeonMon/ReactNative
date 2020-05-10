import React, { Component } from 'react';

import List from './List';
import * as api from './api';

const mapItems = items =>
  items.map((value, i) => ({ key: i.toString(), value }));

/* 해당 기능을 api로 만들어서 getchItems가 수행
const filterAndSort = (data, text, asc) =>
  data
    .filter(
      i =>
        text.length === 0 || i.includes(text)
    )
    .sort(
      asc
        ? (a, b) => (b > a ? -1 : a === b ? 0 : 1)
        : (a, b) => (a > b ? -1 : a === b ? 0 : 1)
    );
*/

class ListContainer extends Component {
  state = {
    asc: true,
    filter: '',
    data:[]
  };

  fetchItems = () => 
    api 
      .fetchItems()
      .then(resp => resp.json())
      .then(({items})=>
        this.setState(state => ({
          data: [...state.data, ...items.map((value, i)=>({
            key: i.toString(),
            value
          }))]
        })
      ));

  
  //컴포넌트가 처음으로 마운트되면 API에서 초기 데이터를 가져온다.
  componentDidMount(){
    this.fetchItems();
  }

  render() {
    return (
      // <List
      //   data={this.state.data}
      //   asc={this.state.asc}
      //   onFilter={text => {

      //     /*
      //     this.setState({
      //       filter: text,
      //       data: filterAndSort(this.state.data, text, this.state.asc)
      //     });
      //     */

      //   //필터가 변경되면 API를 호출한다.
      //   fetchItems(text, this.state.asc)
      //     .then(resp => resp.json())
      //     .then(({items})=>
      //       this.setState({
      //         filter:text,
      //         data: mapItems(items)
      //       })
      //     );  
      //   }}
      //   onSort={() => {
      //     /*
      //     this.setState({
      //       asc: !this.state.asc,
      //       data: filterAndSort(
      //         this.state.data,
      //         this.state.filter,
      //         !this.state.asc
      //       )
      //     });*/

      //     //정렬 방향이 변경되면 API를 호출한다.
      //     fetchItems(this.state.filter, !this.state.asc)
      //       .then(resp=>resp.json())
      //       .then(({items})=>
      //         this.setState({
      //           asc: !this.state.asc,
      //           data: mapItems(items)
      //         })
      //       );
      //   }}
      // />
      <List data = {this.state.data} fetchItems = {this.fetchItems} />
    );
  }
}

export default ListContainer;
