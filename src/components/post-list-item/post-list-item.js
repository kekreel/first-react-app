import React, {Component} from 'react';
import './post-list-item.css'

export default class PostListItem extends Component {

    render() {
        const {label, onDelete, onToggleLiked, onToggleImportant, important, like} = this.props;
        let classNames = 'app-list-item d-flex justify-content-between';

        if (important) {
            classNames += ' important'
        }

        if (like) {
            classNames += ' like'
        }

        return (
            <div className={classNames}>
                <span
                onClick={onToggleLiked}
                className='app-list-item-label'>
                    {label}
                </span>
                <div className='d-flex justify-content-center align-items-center'>
                    <button
                    type='button'
                    className='btn-star btn-sm'
                    onClick={onToggleImportant}>
                        <i class="bi bi-star-fill"></i>
                    </button>
                    <button
                    type='button'
                    className='btn-trash btn-sm'
                    onClick= {onDelete}>
                        <i class="bi bi-trash"></i>
                    </button>
                    <i class="bi bi-heart-fill"></i>
                </div>
            </div>
        )
    }
}