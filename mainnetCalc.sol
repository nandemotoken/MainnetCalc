pragma solidity ^0.5.0;

contract MainnetCalc {
    uint256 number = 0;

    function getNumber() public view returns (uint256){
        return number;
    }
    

    function plus(uint8 number_arg) public{
        number = number + uint256(number_arg);
    }
    
}
