var ExampleApplication = React.createClass({
 render: function() {
 var elapsed = Math.round(this.props.elapsed / 100);
 var seconds = elapsed / 10 + (elapsed % 10 ? '' : '.0' );
 var message =
 'React ' + seconds + ' saniyedir ba�ar�yla �al���yor.';

 return <p>{message}</p>;
 }
});

var start = new Date().getTime();

setInterval(function() {
 React.render(
 <ExampleApplication elapsed={new Date().getTime() - start} />,
 document.getElementById('container')
 );
}, 50);