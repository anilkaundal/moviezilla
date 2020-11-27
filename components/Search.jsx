export default function Card(props) {

    return (
        <form className="search" onInput={event => props.onInput(event.target.value)}>
            <div className="contain">
                <input className="searchbar" type="text" placeholder="Search for movie titles" />
                <a id="btnSearch" className="btn-search">🔍</a>
            </div>
        </form>);
}