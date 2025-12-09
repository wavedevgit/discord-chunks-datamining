/** Chunk was on web.js **/
/** chunk id: 877820, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  Z: () => l
});
var r, Chunk442837 = require("./442837.js"),
  Chunk570140 = require("./570140.js");

function o(e, t, n) {
  return t in e ? Object.defineProperty(e, t, {
    value: n,
    enumerable: true,
    configurable: true,
    writable: true
  }) : e[t] = n, e
}
class s extends(r = Chunk442837.ZP.Store) {
  get isCreatingOrder() {
    return this._isCreatingOrder
  }
  get currentOrderId() {
    var e, t;
    return null != (t = null == (e = this._order) ? true : module.id) ? exports : null
  }
  get currentOrder() {
    return this._order
  }
  get currentPaymentGateway() {
    var e, t, n;
    return null != (n = null == (t = this._order) || null == (e = exports.billing_facet) ? true : module.payment_gateway) ? require : null
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
  handlePaymentModalOpen(e) {
    let {} = e;
    this._order = null
  }
  constructor() {
    super(Chunk570140.Z, {
      ORDER_CREATE_START: e => this.handleOrderCreateStart(e),
      ORDER_CREATE_SUCCESS: e => this.handleOrderCreateSuccess(e),
      ORDER_CREATE_FAIL: e => this.handleOrderCreateFail(e),
      ORDER_UPDATE_START: e => this.handleOrderUpdateStart(e),
      ORDER_UPDATE_SUCCESS: e => this.handleOrderUpdateSuccess(e),
      ORDER_UPDATE_FAIL: e => this.handleOrderUpdateFail(e),
      PAYMENT_MODAL_OPEN: e => this.handlePaymentModalOpen(e)
    }), o(this, "_isCreatingOrder", false), o(this, "_isUpdatingOrder", false), o(this, "_order", null)
  }
}
o(s, "displayName", "OrderStore");
let l = new s