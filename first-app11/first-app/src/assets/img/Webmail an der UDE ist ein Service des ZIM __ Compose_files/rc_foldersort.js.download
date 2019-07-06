if (window.rcmail) {
    /*
     * EventListener to add the sort order to the request
     */
    rcmail.addEventListener('requestlist', function(props) {
        if (rcmail.task == 'mail') {
            var folder_sort = '';
            var folder      = props._mbox;
            var col         = rcmail.env.sort_col;
            var order       = rcmail.env.sort_order;

            if (props._sort) {
                folder_sort = props._sort;
            } else {
                if (rcmail.env.per_folder_sort) {
                    if (rcmail.env.per_folder_sort[folder]) {
                        folder_sort = rcmail.env.per_folder_sort[folder];
                    } else if (rcmail.env.per_folder_sort['default']) {
                        folder_sort = rcmail.env.per_folder_sort['default'];
                    }
                }
            }

            if (folder_sort == '') {
                folder_sort = col + '_' + order;
            }

            var y = folder_sort.split("_", 2);
            col   = y[0];
            order = y[1];

            rcmail.env.sort_col   = col;
            rcmail.env.sort_order = order;

            http_lock = rcmail.set_busy(true, 'rc_foldersort.savingsession');
            var data  = {
                cmd: 'change_session',
                folder: folder,
                col: col,
                order: order
            };
            rcmail.http_post('plugin.rc_foldersort_json', data, http_lock);
            props._sort = folder_sort;
        }

        return props;
    });

    /*
     * EventListener to change the sorting order before we list the messages
     */
    rcmail.addEventListener('beforelist', function(props) {
        var folder = rcmail.env.mailbox;
        if (props) {
            if (rcmail.task == 'mail') {
                if (typeof(props) == 'object' && props.ref == 'rcmail') {
                    folder = props.env.mailbox;
                } else if (typeof(props) == 'string') {
                    folder = props;
                }

                var folder_sort;
                orig_col   = rcmail.env.sort_col;
                orig_order = rcmail.env.sort_order;

                if (rcmail.env.per_folder_sort) {
                    if (rcmail.env.per_folder_sort[folder]) {
                        folder_sort = rcmail.env.per_folder_sort[folder];
                    } else if (rcmail.env.per_folder_sort['default']) {
                        folder_sort = rcmail.env.per_folder_sort['default'];
                    } else {
                        folder_sort = orig_col + '_' + orig_order;
                    }

                    var y = folder_sort.split("_", 2);
                    col   = y[0];
                    order = y[1];
                    if (orig_col != col || orig_order != order) {
                        $('#rcm' + orig_col).removeClass('sorted' + (orig_order.toUpperCase()));
                        $('#rcm' + col).addClass('sorted' + order);
                        rcmail.env.sort_col   = col;
                        rcmail.env.sort_order = order;

                        http_lock = rcmail.set_busy(true, 'rc_foldersort.savingsession');
                        var data  = {
                            cmd: 'change_session',
                            folder: folder,
                            col: col,
                            order: order
                        };
                        rcmail.http_post('plugin.rc_foldersort_json', data, http_lock);
                    }
                }
            }
        }
    });

    /*
     * EventListener to handle the header sort clicks
     */
    rcmail.addEventListener('aftersort', function(prop) {
        if (rcmail.task == 'mail') {
            mbox = rcmail.env.mailbox;

            http_lock = rcmail.set_busy(true, 'rc_foldersort.savingdata');
            var data  = {
                cmd: 'save_order',
                folder: mbox,
                col: rcmail.env.sort_col,
                order: rcmail.env.sort_order
            };
            rcmail.http_post('plugin.rc_foldersort_json', data, http_lock);
        }
    });
}
