import React, { Component } from 'react';
// import Select from 'react-select';
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux';
import * as langActions from '../../actions/SearchAction';
import { setTimeout } from 'timers';
// import _ from 'lodash';
import {categorieLangOptions} from '../../webServices/dataLang';

class SearchLang extends Component {

    constructor(props) {
        super(...props)

        this.state = {
            nameSelect:'selectLang',
        }
        this.handleChange = this.handleChange.bind(this);
        this.handleRefreshClick = this.handleRefreshClick.bind(this);
        this.checkListLang = this.checkListLang.bind(this);
    }

    componentWillMount () {
        setTimeout(() => {
            return  this.props.langAction.fechtNeedPostLang()
       }, 50000);
    }

    componentDidMount() {
        this.props.langAction.fechtNeedPostLang()
    }

    componentDidUpdate = (prevProps) => {
        if (this.props.stroreLang.items !== prevProps.stroreLang.items) {
           console.log(prevProps,'prevprops+++')
        }
    }

    componentWillUnmount = () => {
        let clearnDom = this.props;
        let intervalId = null;
        const cleanFinishRender = () => {
            document.getElementById("bip").innerHTML = "TERMINE!";
            clearInterval(intervalId, clearnDom);
            this.props.langAction.fechtNeedPostLang(clearnDom);
        }
        cleanFinishRender();
    }

    handleChange(nextSubreddit) {
        this.props.langAction.fechtNeedPostLang();
        console.log(nextSubreddit,('nextSubreddit'))
    }

    handleRefreshClick(e) {
        e.preventDefault()
        this.props.langAction.fechtNeedPostLang();
    }

    checkListLang = () => {
        // const storeLangSelect = this.props.stroreLang;
        return categorieLangOptions.map((item,index) => <option key={index}> {item.value} </option>)
    }

    render() {
        return (
            <div className="search-main">
                <div class="col-lg-12">
                    <div class="input-group">
                        <select name={this.state.nameSelect} className="form-control input-lg" onChange={this.handleChange}>
                            {this.checkListLang()}
                        </select>
                    </div>
                </div>
            </div>
        );
    }
}

const mapStateToProps = state => ({
    stroreLang: state.rootReducerSearch.postsBySubreddit,
  });
  
  const mapDispatchToProps = dispatch => ({
    langAction: bindActionCreators(langActions, dispatch),
  });

  export default connect(mapStateToProps, mapDispatchToProps )(SearchLang);
