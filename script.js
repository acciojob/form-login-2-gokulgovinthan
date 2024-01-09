document.getElementById('submitButton').onclick=function(){
	const FirstName=document.getElementById('FirstName').value;
	const LastName=document.getElementById('LastName').value;
	const PhoneNumber=document.getElementById('PhoneNumber').value;
	const EmailId=document.getElementById('Email').value;

alert(`First Name: ${FirstName}\nLast Name: ${LastName}\nPhone Number: ${PhoneNumber}\nEmail ID: ${EmailId}`);
}
