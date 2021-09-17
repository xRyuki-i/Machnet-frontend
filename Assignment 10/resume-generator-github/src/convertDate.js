export const convertDate = (date) => {
    let allDate = date.split(' ');
    let thisDate = allDate[0].split('-');

    let month = parseInt(thisDate[1])
    let mmm = ['Jan', 'Feb', 'Mar', 'Apr',
                'May', 'Jun', 'July', 'Aug',
                'Sept', 'Oct','Nov', 'Dec' ]
                    
    let convertedDate = [thisDate[2],mmm[month - 1],thisDate[0] ].join(" ");
    
    return convertedDate;
}
