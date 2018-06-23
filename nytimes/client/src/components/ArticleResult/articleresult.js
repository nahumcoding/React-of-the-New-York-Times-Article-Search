import React from 'react';
import articleResult from './articleResult.css';

const ArticleResult = props => {
  return (
    <div className="row">
      <div className="panel panel-default">
        <div className="panel-heading">
          <h2 className="container-fluid">
            <div className="row">
              <a href={props.data.web_url} className="col-xs-8">
                {props.data.headline.main}
              </a>
              <div className="col-xs-4">
                <a href={''} onClick={e => props.onClick(e, props.data)} className="btn btn-success saveButton">
                  Save
                </a>
              </div>
            </div>
          </h2>
        </div>
        <div className="panel-body">
          <h3>
            {props.data.snippet}
          </h3>
          <p className="text-right">
            <time>
              {'Published on: ' + props.data.pub_date.substring(0, 10)}
            </time>
          </p>
        </div>
      </div>
    </div>
  )
}

export default ArticleResult;