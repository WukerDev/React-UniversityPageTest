const Notifications = [
    // aby dodać dane robi się wedle wzoru: 
    // {dateTime: "", sender: "", message: ""},
    { 
        dateTime: "2020-10-10 10:10:10", 
        sender: "Wiktor Kozakowski", 
        message: "Gratulacje użytkowniku, wygrałeś iPhone 7!" 
    },
    { 
        dateTime: "2021-12-05 18:12:57", 
        sender: "Jakub Kordella", 
        message: "System React.js działa poprawnie*\n*nie działa.\nAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAA"
    },
    { 
        dateTime: "2023-03-12 12:35:35", 
        sender: "System", 
        message: "Strona poprawnie zbudowana w node.js" 
    },
];

const NoNotifData = "Brak powiadomień";

export default Notifications;
export {NoNotifData};