$('.downloadcv').on('click', function () {
    const fileUrl = '/assets/CV ENGLISH HANIF.pdf';
    const fileName = 'CV_Hanif.pdf';
    const link = $('<a></a>');
    link.attr('href', fileUrl)
        .attr('download', fileName)
        .appendTo('body')
        .get(0).click();
    link.remove();
});
