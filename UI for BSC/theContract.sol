pragma solidity ^0.5.0 ;
contract theContract {
    event messageWrite(string _text);
    string message = "hello world";
    
    function writeMessage(string memory _message) public payable {
        require(msg.value == 100000000000000000, "error");  
        message = _message ;
        emit messageWrite(_message);
    }
    
    function getMessage() public view returns(string memory){
        return(message);
    }
}