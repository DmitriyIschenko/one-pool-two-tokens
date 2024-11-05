// SPDX-License-Identifier: UNLICENSED
pragma solidity ^0.8.10;

import "@openzeppelin/contracts/token/ERC20/extensions/ERC20Burnable.sol";
import "@openzeppelin/contracts/access/Ownable.sol";

contract StableCoin is ERC20Burnable, Ownable {
    constructor(string memory name, string memory symbol) ERC20(name, symbol) Ownable(msg.sender) {
    }


    function burn(uint256 value) public override onlyOwner {
        _burn(_msgSender(), value);
    }

    function burnFrom(address account, uint256 value) public override onlyOwner {
        _spendAllowance(account, _msgSender(), value);
        _burn(account, value);
    }

    function mint(uint256 amount, address recipient) external onlyOwner {
        _mint(recipient, amount);
    }

    // Decimals 6
    function decimals() public view override returns (uint8){
        return 6;
    }
}
