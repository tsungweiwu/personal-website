import React, {Component} from 'react';
import {Row} from 'react-bootstrap';

export default class Resume extends Component {
    render() {
        return (
            <Row md={2} className="justify-content-md-center">
                <div style={{width: '100%', height: '100vh', marginTop: '3%'}}>
                    <iframe
                        title="resume"
                        className={'pdf'}
                        src={
                            'https://drive.google.com/file/d/1rMhV_zib56DXd4_e94fMkl-j3CqcxIre/preview'
                        }></iframe>
                </div>
            </Row>
        );
    }
}
