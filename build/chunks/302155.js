/** Chunk was on web.js **/
/** chunk id: 302155, original params: e,t,n (module,exports,re quire) **/
"use strict";
let r, i;
require.d(exports, {
  Z: () => _
});
var Chunk213919 = require("./213919.js"),
  Chunk570140 = require("./570140.js"),
  Chunk147913 = require("./147913.js"),
  Chunk594174 = require("./594174.js"),
  Chunk626135 = require("./626135.js"),
  Chunk726745 = require("./726745.js"),
  Chunk981631 = require("./981631.js");

function f(e, t, n) {
  return t in e ? Object.defineProperty(e, t, {
    value: n,
    enumerable: true,
    configurable: true,
    writable: true
  }) : e[t] = n, e
}
let p = false;
class _ extends Chunk147913.Z {
  _initialize() {
    Chunk570140.Z.subscribe("CONNECTION_OPEN", () => this.handleConnectionOpen()), this.handleConnectionOpen()
  }
  _terminate() {
    Chunk570140.Z.unsubscribe("CONNECTION_OPEN", () => this.handleConnectionOpen())
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
          let e = u.Z.getUsers().map(e => {
            let {
              id: t
            } = e;
            return t
          });
          c.default.track(d.rMx.MULTI_ACCOUNT_SWITCH_SUCCESS, {
            from_user_id: i,
            linked_user_ids: e
          }), null == (n = (o = this).onSwitchSuccess) || n.call(o, _, p)
        } else c.default.track(d.rMx.MULTI_ACCOUNT_SWITCH_FAILURE), null == (s = (f = this).onSwitchError) || s.call(f, _);
        i = null
      }
      r = _.id;
      let m = a.getToken();
      null != m && "" !== m && a.setToken(m, _.id), null == (e = (t = this).onTokenSet) || e.call(t, _)
    }), f(this, "handleLogout", e => {
      if (e.isSwitchingAccount) {
        var t, n;
        i = r, null == (t = (n = this).onSwitchStart) || t.call(n), p = !!e.goHomeAfterSwitching
      } else p = false, a.removeToken(r);
      r = null
    }), this.onSwitchStart = e, this.onSwitchSuccess = t, this.onSwitchError = n, this.onTokenSet = o
  }
}