import React from 'react';
import uniqid from 'uniqid';

function FormView (props) {
    const general = props.state.general[0];
    const educational = props.state.educational;
    const practical = props.state.practical;

    const renderEducationalSections = () => {
        const educationalSections = educational.map((item) => {
            return (
                <section className='c-view__content__left__educational__section' key={uniqid()}>
                    <div className='c-view__content__left__educational__section__item'>
                        <h3>School Name:</h3>
                        <p>{item.school}</p>
                    </div>
                    <div className='c-view__content__left__educational__section__item'>
                        <h3>Title of Study:</h3>
                        <p>{item.study}</p>
                    </div>
                    <div className='c-view__content__left__educational__section__item'>
                        <h3>Date of Study:</h3>
                        <p>{item.date}</p>
                    </div>
                </section>
            );
        });
        return educationalSections;
    }

    const renderPracticalSections = () => {
        const practicalSections = practical.map((item) => {
            return (
                <section className='c-view__content__right__practical__section' key={uniqid()}>
                    <div className='c-view__content__right__practical__section__item'>
                        <h3>Company Name:</h3>
                        <p>{item.company}</p>
                    </div>
                    <div className='c-view__content__right__practical__section__item'>
                        <h3>Position Title:</h3>
                        <p>{item.title}</p>
                    </div>
                    <div className='c-view__content__right__practical__section__item'>
                        <h3>Main Task:</h3>
                        <p>{item.task}</p>
                    </div>
                    <div className='c-view__content__right__practical__section__item'>
                        <h3>Duration:</h3>
                        <p>From {item.from} to {item.to}</p>
                    </div>
                </section>
            );
        });
        return practicalSections;
    }

    return (
        <section className='c-view'>
            <div className='c-view__header'>
                <div className='c-view__header__img'>
                    <img src='#' alt='User Profile' />
                </div>
                <div className='c-view__header__teaser'>
                    <p>{!general ? '' : general.email}</p>
                    <p>{!general ? '' : general.phone}</p>
                </div>
            </div>
            <div className='u-offset'>
                <div className='c-view__content'>
                    <div className='c-view__content__left'>
                        <div className='u-border c-view__content__left__general'>
                            <h2>General Information</h2>
                            <div className='c-view__content__left__general__item'>
                                <h3>Name:</h3>
                                <p>{!general ? '' : general.firstname} {!general ? '' : general.lastname}</p>
                            </div>
                            <div className='c-view__content__left__general__item'>
                                <h3>About Me:</h3>
                                <p>{!general ? '' : general.info}</p>
                            </div>
                        </div>
                        <div className='u-border c-view__content__left__educational'>
                            <h2>Educational Information</h2>
                            {renderEducationalSections()}
                        </div>
                    </div>
                    <div className='c-view__content__right'>
                        <div className='u-border c-view__content__right__practical'>
                            <h2>Practical Information</h2>
                            {renderPracticalSections()}
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}

export default FormView;
