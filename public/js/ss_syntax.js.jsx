(function () {
    var SsSyntax = React.createClass({
        getInitialState: function() {
            return {
                html: ''
            };
        },

        handleChange: function(event) {
            var data = {text: event.target.value};
            $.post('/parse.json', data, function(result) {
                console.log(result);
                var html = result['html'];
                this.setState({
                    html: html
                });
            }.bind(this));
        },

        render: function() {
            return (
                <div>
                    <div className="col-md-6" dangerouslySetInnerHTML={{__html: this.state.html}} ></div>
                    <div className="col-md-6">
                        <form role="form">
                            <div className="form-group">
                                <label for="name">SS Input</label>
                                <textarea className="form-control" rows="3" onChange={this.handleChange}></textarea>
                            </div>
                        </form>
                    </div>
                </div>
            );
        }
    });

    React.render(
        <SsSyntax/>,
        document.getElementById('example')
    );

})();
