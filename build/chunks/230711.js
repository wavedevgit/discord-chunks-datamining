/** Chunk was on web.js **/
/** chunk id: 230711, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  Z: () => f
}), require("./415506.js");
var Chunk544891 = require("./544891.js"),
  Chunk433517 = require("./433517.js"),
  Chunk570140 = require("./570140.js"),
  Chunk330055 = require("./330055.js"),
  Chunk37234 = require("./37234.js"),
  Chunk981631 = require("./981631.js"),
  Chunk792101 = require("./792101.js");

function u(e, t, n) {
  return t in e ? Object.defineProperty(e, t, {
    value: n,
    enumerable: true,
    configurable: true,
    writable: true
  }) : e[t] = n, e
}

function d(e) {
  for (var t = 1; t < arguments.length; t++) {
    var n = null != arguments[t] ? arguments[t] : {},
      r = Object.keys(n);
    "function" == typeof Object.getOwnPropertySymbols && (r = r.concat(Object.getOwnPropertySymbols(n).filter(function(e) {
      return Object.getOwnPropertyDescriptor(n, e).enumerable
    }))), r.forEach(function(t) {
      u(e, t, n[t])
    })
  }
  return e
}
let f = {
  open() {
    let e = arguments.length > 0 && true !== arguments[0] ? arguments[0] : null,
      t = arguments.length > 1 && true !== arguments[1] ? arguments[1] : null,
      n = arguments.length > 2 && true !== arguments[2] ? arguments[2] : {
        openWithoutBackstack: false
      };
    a.Z.dispatch(d({
      type: "USER_SETTINGS_MODAL_OPEN",
      section: e,
      subsection: t
    }, n)), (0, s.jN)(l.S9g.USER_SETTINGS)
  },
  close() {
    a.Z.dispatch({
      type: "USER_SETTINGS_MODAL_CLOSE"
    })
  },
  setSection(e) {
    let t = arguments.length > 1 && true !== arguments[1] ? arguments[1] : null,
      n = arguments.length > 2 && true !== arguments[2] ? arguments[2] : {};
    a.Z.dispatch(d({
      type: "USER_SETTINGS_MODAL_SET_SECTION",
      section: e,
      subsection: t
    }, n))
  },
  clearSubsection(e) {
    a.Z.dispatch({
      type: "USER_SETTINGS_MODAL_CLEAR_SUBSECTION",
      forSection: e
    })
  },
  clearScrollPosition(e) {
    a.Z.dispatch({
      type: "USER_SETTINGS_MODAL_CLEAR_SCROLL_POSITION",
      forSection: e
    })
  },
  updateAccount(e) {
    a.Z.dispatch({
      type: "USER_SETTINGS_MODAL_UPDATE_ACCOUNT",
      settings: e
    })
  },
  submitComplete() {
    a.Z.dispatch({
      type: "USER_SETTINGS_MODAL_SUBMIT_COMPLETE"
    })
  },
  reset() {
    a.Z.dispatch({
      type: "USER_SETTINGS_MODAL_RESET"
    })
  },
  saveAccountChanges(e, t) {
    a.Z.dispatch({
      type: "USER_SETTINGS_MODAL_SUBMIT"
    });
    let {
      username: n,
      email: s,
      emailToken: u,
      password: d,
      avatar: f,
      newPassword: p,
      discriminator: _
    } = e, {
      close: h
    } = t, m = {
      username: n,
      email: s,
      email_token: u,
      password: d,
      avatar: f,
      new_password: p,
      discriminator: null != _ && "" !== _ ? _ : true
    }, g = i.K.get(l.JkL), E = (0, c.xJ)();
    null != E && null != g && (m.push_provider = E, m.push_token = g);
    let b = i.K.get(l.scU);
    return null != c.mv && null != b && (m.push_voip_provider = c.mv, m.push_voip_token = b), r.tn.patch({
      url: l.ANM.ME,
      oldFormErrors: true,
      body: m,
      rejectWithError: false
    }).then(e => {
      let t = e.body,
        n = t.token;
      return delete t.token, a.Z.dispatch({
        type: "UPDATE_TOKEN",
        token: n,
        userId: t.id
      }), a.Z.dispatch({
        type: "CURRENT_USER_UPDATE",
        user: t
      }), true !== f && (0, o.Z)({
        avatarHash: t.avatar
      }), null != p && a.Z.dispatch({
        type: "USER_PASSWORD_UPDATE",
        user: t,
        newPassword: p
      }), null != d && null != p && a.Z.dispatch({
        type: "PASSWORD_UPDATED",
        userId: t.id
      }), h ? this.close() : this.submitComplete(), e
    }, e => (a.Z.dispatch({
      type: "USER_SETTINGS_MODAL_SUBMIT_FAILURE",
      errors: e.body
    }), e))
  }
}