"use strict";

let blindSignatures = require('blind-signatures');

let SpyAgency = require('./spyAgency.js').SpyAgency;

function makeDocument(coverName) {
  return `The bearer of this signed document, ${coverName}, has full diplomatic immunity.`;
}

function blind(msg, n, e) {
  
  return blindSignatures.blind({
    message: msg,
    N: agency.n,
    E: agency.e,
  });
}

function unblind(blindingFactor, sig, n) {
  return blindSignatures.unblind({
    signed: sig,
    N: n,
    r: blindingFactor,
  });
}


let agency = new SpyAgency();

//
// ***YOUR CODE HERE***
//
// Prepare 10 documents with 10 different cover identities (using the makeDocument function).
// Blind each of the 10 documents, and remember to store their blinding factors.
//


agency.signDocument(blindDocs, (selected, verifyAndSign) => {

  //
  // ***YOUR CODE HERE***
  //
  // The 'signDocument' function takes a callback function, which
  // specifies which of the 10 documents the spy agency will sign.
  //
  // You must call the 'verifyAndSign' function, specifying arrays with:
  // 1) the blinding factors
  // 2) the original documents
  //
  // Note that you should specify this information for all documents
  // EXCEPT the specified document.  (In the selected position, set
  // these positions to 'undefined'.)
  //
  // The verifyAndSign function will return the blinded signature.
  // Unblind it, and make sure that the signature is valid for
  // the selected document.

});
