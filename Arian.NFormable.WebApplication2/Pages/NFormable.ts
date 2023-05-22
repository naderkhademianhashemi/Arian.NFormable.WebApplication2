class NFormable extends Card {
    constructor($mainPage: JQuery) {
        super(' ');

        this.$card.appendTo($mainPage);

        var $row = $('<div class="row" />').appendTo(this.$body);
        var $col4 = $('<div class="col col-4" />').append('&nbsp;').appendTo($row);
        var $col8 = $('<div class="col col-8 text-left" />').appendTo($row);

        var $actions = $('<div class="display-inline-block" />').appendTo($col4);


        Button("NDR", (doc) => {
            var model = {
                reportType: "AtfSticker"
            };
            var pform: Formable<any, any> = new Formable<any, any>(model, [{
                fieldOptions: [[
                    new FieldOption({
                        name: "reportType",
                        title: "resource.ReportType",
                        type: InputTypes.select,
                        options: ["AtfSticker", "Barcode", "LendingCard", "RegCard"],
                        optionText: k => k,
                        optionValue: k => k
                    }),
                ]]
            }],
                [
                    {
                        text: resource.Execute, click: (_ps) => {

                            new ModalReportViewer(_ps.reportType, { ItemId: "ItemId" })

                        }
                    },
                    { text: resource.Cancel, theme: "danger", click: () => pform.modal.close() }
                ],
                null, true);

            pform.Fire();
            pform.modalSize(ModalSize.xs)

        }).appendTo($actions.append(' '));

    }
}

$(function () {
    var btnNdr = new NFormable($("#mainPage"));

})