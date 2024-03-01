// @ts-nocheck


const Pagination = ({ nPages, currentPage, setCurrentPage }) => {

    const pageNumbers = [...Array(nPages + 1).keys()].slice(1)

    

    const goToNextPage = () => {
            if(currentPage !== nPages) setCurrentPage(currentPage + 1)
    }
    const goToPrevPage = () => {
        if(currentPage !== 1) setCurrentPage(currentPage - 1)
    }
    return (
        <nav className='ml-auto'>
            <ul className='flex text-black  mx-auto border border-gray-400    w-fit border-gray-400  text-sm lg:text-[16px]'>
                <li className="page-item border border-gray-400 px-2 lg:px-4 py-2  ">
                    <a className="page-link" 
                        onClick={goToPrevPage} 
                        href='#'>
                        
                        Previous
                    </a>
                </li>
                {/* {pageNumbers.map(pgNumber => (
                    <li key={pgNumber} 
                        className= {`page-item border border-gray-400 px-2 lg:px-4 py-2 ${currentPage == pgNumber ? 'bg-blue-600 text-white' : ''} `} >

                        <a onClick={() => setCurrentPage(pgNumber)}  
                            className='page-link' 
                            href='#'>
                            
                            {pgNumber}
                        </a>
                    </li>
                ))} */}
                <li className="page-item border border-gray-400 px-2 lg:px-4 py-2">
                    <a className="page-link" 
                        onClick={goToNextPage}
                        href='#'>
                        
                        Next
                    </a>
                </li>
            </ul>
        </nav>
    )
}

export default Pagination
