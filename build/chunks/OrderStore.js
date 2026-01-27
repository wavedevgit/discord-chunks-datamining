/** Chunk was on web.js **/
/** chunk id: 224949, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  A: () => l
});
var r, Chunk311907 = require("./311907.js"),
  Chunk73153 = require("./73153.js");

function o(e, t, n) {
  return t in e ? Object.defineProperty(e, t, {
    value: n,
    enumerable: true,
    configurable: true,
    writable: true
  }) : e[t] = n, e
}
class s extends(r = Chunk311907.Ay.Store) {
  get isCreatingOrder() {
    return this._isCreatingOrder
  }
  get currentOrderId() {
    var e, t;
    return null != (e = null == (t = this._order) ? true : t.id) ? e : null
  }
  get currentOrder() {
    return this._order
  }
  get currentPaymentGateway() {
    var e, t, n;
    return null != (e = null == (n = this._order) || null == (t = n.billing_facet) ? true : t.payment_gateway) ? e : null
  }
  handleOrderCreateStart(e) {
    let {} = e;
    this._isCreatingOrder = true
  }
  handleOrderCreateSuccess(e) {
    let {
      orderId: t,
      order: n
    } = e;
    this._isCreatingOrder = false, this._order = null != n ? n : null
  }
  handleOrderCreateFail(e) {
    let {} = e;
    this._isCreatingOrder = false
  }
  handleOrderUpdateStart(e) {
    let {} = e;
    this._isUpdatingOrder = true
  }
  handleOrderUpdateSuccess(e) {
    let {} = e;
    this._isUpdatingOrder = false
  }
  handleOrderUpdateFail(e) {
    let {} = e;
    this._isUpdatingOrder = false
  }
  handleOrderDiscardSuccess(e) {
    var t;
    let {
      orderId: n
    } = e;
    if ((null == (t = this._order) ? true : t.id) !== n) returnfalse;
    this._order = null
  }
  handlePaymentModalOpen(e) {
    let {} = e;
    this._order = null
  }
  constructor() {
    super(a.h, {
      ORDER_CREATE_START: e => this.handleOrderCreateStart(e),
      ORDER_CREATE_SUCCESS: e => this.handleOrderCreateSuccess(e),
      ORDER_CREATE_FAIL: e => this.handleOrderCreateFail(e),
      ORDER_UPDATE_START: e => this.handleOrderUpdateStart(e),
      ORDER_UPDATE_SUCCESS: e => this.handleOrderUpdateSuccess(e),
      ORDER_UPDATE_FAIL: e => this.handleOrderUpdateFail(e),
      ORDER_DISCARD_SUCCESS: e => this.handleOrderDiscardSuccess(e),
      PAYMENT_MODAL_OPEN: e => this.handlePaymentModalOpen(e)
    }), o(this, "_isCreatingOrder", false), o(this, "_isUpdatingOrder", false), o(this, "_order", null)
  }
}
o(s, "displayName", "OrderStore");
let l = new s