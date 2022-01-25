import React from "react";



const ContactList = (props) => {
    console.log(props);

    const renderContactList = props.contacts.map((contact) => {
        return (
            <div className="item">
                <div className="content">
                    <div className="header">{contact.name}</div>
                    <div>{contact.email}</div>
                </div>
                <i className="Trash icon"></i>
            </div>
        );
    });
    return <div className="UI List">{renderContactList}</div>;
};

export default ContactList;