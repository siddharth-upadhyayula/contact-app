import React from "react";



const ContactList = (props) => {
    console.log(props);

    const renderContactList = props.contacts.map(contact) => {
        return (
            <div className="item">
                <div className="content">
                    <div className="header"> name </div>
                </div>
            </div>
        )
    }
    return <div className="UI List">ContactList</div>;
}

export default ContactList;