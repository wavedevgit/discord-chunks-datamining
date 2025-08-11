/** Chunk was on web.js **/
/** chunk id: 877820, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  Z: () => l
});
var r, Chunk442837 = require("./442837.js"),
  Chunk570140 = require("./570140.js");

function a(e, t, n) {
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
    return this._orderId
  }
  handleOrderCreateStart(e) {
    let {} = e;
    this._isCreatingOrder = true
  }
  handleOrderCreateSuccess(e) {
    let {
      orderId: t
    } = e;
    this._isCreatingOrder = false, this._orderId = t
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
    this._orderId = null
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
    }), a(this, "_isCreatingOrder", false), a(this, "_isUpdatingOrder", false), a(this, "_orderId", null)
  }
}
a(s, "displayName", "OrderStore");
let l = new s