/* 
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */

function sum (arr) {
    return arr.reduce(function(a, b) {
        return a + b
    }, 0)
}
module.exports.sum = sum;

