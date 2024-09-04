import styles from './Signin.module.css'
function Signin() {
    return (
        <div className="container-flued">
            <dir className="container">
                <div className="row mt-5">
                    <div className={`${styles.myclass} cal border shadow`} >
                        <form action className="mx-auto">
                            <div className="">
                                <label className="" htmlFor=""><p>userName:</p></label>
                                <input className="border border-outline-info rounded shadow fs-4 text-center" type="text" placeholder="usernaem" />
                            </div>
                            <div>
                                <label htmlFor="">password:</label>
                                <input className="border border-outline-info rounded shadow fs-4 text-center" type="password" placeholder="password" />
                            </div>
                            <a href="">forgot</a>
                            <button className={`${styles.mybtn} rounded border-outline-info`}>Logine</button>
                        </form>
                    </div>
                </div>
            </dir>
        </div>
    )
}

export default Signin