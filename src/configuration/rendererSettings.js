export default function rendererSettings() {
    return {
        site_col: 'sitename',
        id_col: 'subjectnameoridentifier',
        visit_col: 'folderinstancename',
        form_col: 'ecrfpagename',
        value_cols: [
            {
                col: 'is_partial_entry',
                type: 'crfs',
                label: 'Entered',
                description: 'Data have been submitted in the EDC system.'
            },
            {
                col: 'verified',
                type: 'crfs',
                denominator: 'needs_verification',
                label: 'Source Data Verified',
                description: 'All required fields have source data verification complete in EDC.'
            },
            {
                col: 'ready_for_freeze',
                type: 'crfs',
                label: 'Ready for Freeze',
                description:
                    'All required cleaning is complete (e.g. SDV, queries resolved) and data are ready to be frozen in EDC.'
            },
            {
                col: 'is_frozen',
                type: 'crfs',
                label: 'Frozen',
                description: 'Data have been frozen in the EDC system.'
            },
            {
                col: 'is_signed',
                type: 'crfs',
                denominator: 'needs_signature',
                label: 'Signed',
                description: 'Data have been signed in the EDC system.'
            },
            {
                col: 'is_locked',
                type: 'crfs',
                label: 'Locked',
                description: 'Data have been locked in the EDC system.'
            },
            {
                col: 'open_query_ct',
                type: 'queries',
                label: 'Open',
                description: 'Site has not responded to issue.'
            },
            {
                col: 'answer_query_ct',
                type: 'queries',
                label: 'Answered',
                description: 'Site has responded to issue, DM needs to review.'
            }
        ],
        filter_cols: [
            {
                value_col: 'sitename',
                label: 'Site'
            },
            {
                value_col: 'subjectnameoridentifier',
                label: 'Subject ID'
            },
            {
                value_col: 'foldername',
                label: 'Folder'
            },
            {
                value_col: 'architectformname',
                label: 'Form'
            },
            {
                value_col: 'status',
                label: 'Subject Status',
                multiple: true,
                subject_export: true
            },
            {
                value_col: 'subjfreezeflg',
                label: 'Subject Freeze Status',
                subject_export: true
            },
            {
                value_col: 'subset1',
                label: 'Subset 1'
            },
            {
                value_col: 'subset2',
                label: 'Subset 2'
            },
            {
                value_col: 'subset3',
                label: 'Subset 3'
            }
        ],
        visit_order_col: 'folder_ordinal',
        form_order_col: 'form_ordinal',
        default_nesting: ['site_col', 'id_col'],
        display_fractions: false,
        expand_all: false,
        sliders: false,
        max_rows_warn: 10000
    };
}
