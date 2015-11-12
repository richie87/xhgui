window.Xhgui = window.Xhgui || {};

Xhgui.tableSort = function(tables) {
    tables.stickyTableHeaders();
    tables.tablesorter({
        textExtraction: function(node) {
            if (node.className.match(/text/)) {
                return node.innerText;
            }
            var text = node.innerText || node.textContent;
            return '' + parseInt(text.replace(/,/g, ''), 10);
        }
    });
};

// Utilitarian DOM behavior.
$(document).ready(function () {
    $('.tip').tooltip();

    var tables = $('.table-sort');
    Xhgui.tableSort(tables);

    $('.datepicker').datepicker();


    // Bind events for expandable search forms.
    var searchForm = $('.search-form'),
        searchExpand = $('.search-expand'),
        hostSelect = $('.hostselect');

    searchExpand.on('click', function () {
        hostSelect.fadeOut('fast');
        searchExpand.fadeOut('fast', function () {
            searchForm.slideDown('fast');
        });
        return false;
    });

    $('.search-collapse').on('click', function () {
        searchForm.slideUp('fast', function () {
            hostSelect.show();
            searchExpand.show();
        });
        return false;
    });

});
