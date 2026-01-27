/** Chunk was on web.js **/
/** chunk id: 240233, original params: e,t,n (module,exports,re quire) **/
"use strict";
let r, i;
require.d(exports, {
  A: () => _
});
var Chunk247775 = require("./247775.js"),
  Chunk73153 = require("./73153.js"),
  Chunk439372 = require("./439372.js"),
  Chunk287809 = require("./287809.js"),
  Chunk954571 = require("./954571.js"),
  Chunk274303 = require("./274303.js"),
  Chunk652215 = require("./652215.js");

function f(e, t, n) {
  return t in e ? Object.defineProperty(e, t, {
    value: n,
    enumerable: true,
    configurable: true,
    writable: true
  }) : e[t] = n, e
}
let p = false;
class _ extends Chunk439372.A {
  _initialize() {
    o.h.subscribe("CONNECTION_OPEN", () => this.handleConnectionOpen()), this.handleConnectionOpen()
  }
  _terminate() {
    o.h.unsubscribe("CONNECTION_OPEN", () => this.handleConnectionOpen())
  }
  constructor({
    onSwitchStart: e,
    onSwitchSuccess: t,
    onSwitchError: n,
    onTokenSet: o
  }) {
    super(), f(this, "onSwitchStart", true), f(this, "onSwitchSuccess", true), f(this, "onSwitchError", true), f(this, "onTokenSet", true), f(this, "actions", {
      LOGOUT: e => this.handleLogout(e)
    }), f(this, "handleConnectionOpen", () => {
      var e, t, n, o, s, f;
      let _ = l.default.getCurrentUser();
      if (null == _) return;
      if (null != i) {
        if (i !== r) {
          let e = u.A.getUsers().map(e => {
            let {
              id: t
            } = e;
            return t
          });
          c.default.track(d.HAw.MULTI_ACCOUNT_SWITCH_SUCCESS, {
            from_user_id: i,
            linked_user_ids: e
          }), null == (n = (o = this).onSwitchSuccess) || n.call(o, _, p)
        } else c.default.track(d.HAw.MULTI_ACCOUNT_SWITCH_FAILURE), null == (s = (f = this).onSwitchError) || s.call(f, _);
        i = null
      }
      r = _.id;
      let h = a.getToken();
      null != h && "" !== h && a.setToken(h, _.id), null == (e = (t = this).onTokenSet) || e.call(t, _)
    }), f(this, "handleLogout", e => {
      if (e.isSwitchingAccount) {
        var t, n;
        i = r, null == (t = (n = this).onSwitchStart) || t.call(n), p = !!e.goHomeAfterSwitching
      } else p = false, a.removeToken(r);
      r = null
    }), this.onSwitchStart = e, this.onSwitchSuccess = t, this.onSwitchError = n, this.onTokenSet = o
  }
}