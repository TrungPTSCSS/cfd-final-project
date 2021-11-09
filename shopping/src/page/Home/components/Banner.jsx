import React from 'react'
import { Link } from 'react-router-dom'
import { Button } from '../../../components'

export default function Banner({ listBanner }) {
    if (!listBanner) return <div>Loading</div>
    return (
        <section>
            <div className="row no-gutters d-block d-lg-flex flickity flickity-lg-none" data-flickity="{&quot;watchCSS&quot;: true}">
                {
                    listBanner.map((object, index) => (
                        <div key={index} className="col-12 col-md-6 col-lg-4 d-flex flex-column bg-cover" style={{ backgroundImage: `url(${object?.image})` }}>
                            <div className="card bg-dark-5 bg-hover text-white text-center" style={{ minHeight: '470px' }}>
                                <div className="card-body mt-auto mb-n11 py-8">
                                    {/* Heading */}
                                    <h1 className="mb-0 font-weight-bolder">
                                        {object.title}
                                    </h1>
                                </div>
                                <div className="card-body mt-auto py-8">
                                    {/* Button */}
                                    <Button {...object} color={'white'}/>
                                    {/* <Link className="btn btn-white stretched-link" to={{ pathname: `/shop/?type=${object?.type}` }}>
                                        {object.titleButton} <i className="fe fe-arrow-right ml-2" />
                                    </Link> */}
                                </div>
                            </div>
                        </div>
                    ))
                }
            </div>
        </section>
    )
}
