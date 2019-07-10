import React, { Component } from 'react';

class SearchData extends Component {
    render() {
        return (
            <div className="search-main">
                <div class="col-lg-12">
                    <div class="input-group">
                        <span class="input-group-btn">
                            <button class="btn btn-info" type="button">OK</button>
                        </span>
                        <input type="text" class="form-control" placeholder="Chercher.." />
                    </div>
                </div>
            </div>
        );
    }
}

export default SearchData;