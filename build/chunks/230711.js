/** Chunk was on web.js **/
/** chunk id: 230711, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  Z: () => g
}), require("./415506.js");
var Chunk544891 = require("./544891.js"),
  Chunk433517 = require("./433517.js"),
  Chunk570140 = require("./570140.js"),
  Chunk330055 = require("./330055.js"),
  Chunk663389 = require("./663389.js"),
  Chunk546796 = require("./546796.js"),
  Chunk37234 = require("./37234.js"),
  Chunk981631 = require("./981631.js"),
  Chunk792101 = require("./792101.js"),
  Chunk388032 = require("./388032.jsx");

function _(e, t, n) {
  return t in e ? Object.defineProperty(e, t, {
    value: n,
    enumerable: true,
    configurable: true,
    writable: true
  }) : e[t] = n, e
}

function p(e) {
  for (var t = 1; t < arguments.length; t++) {
    var n = null != arguments[t] ? arguments[t] : {},
      r = Object.keys(n);
    "function" == typeof Object.getOwnPropertySymbols && (r = r.concat(Object.getOwnPropertySymbols(n).filter(function(e) {
      return Object.getOwnPropertyDescriptor(n, e).enumerable
    }))), r.forEach(function(t) {
      _(e, t, n[t])
    })
  }
  return e
}

function h(e, t) {
  var n = Object.keys(e);
  if (Object.getOwnPropertySymbols) {
    var r = Object.getOwnPropertySymbols(e);
    t && (r = r.filter(function(t) {
      return Object.getOwnPropertyDescriptor(e, t).enumerable
    })), n.push.apply(n, r)
  }
  return n
}

function m(e, t) {
  return t = null != t ? t : {}, Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t)) : h(Object(t)).forEach(function(n) {
    Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(t, n))
  }), e
}
let g = {
  open() {
    let e = arguments.length > 0 && true !== arguments[0] ? arguments[0] : null,
      t = arguments.length > 1 && true !== arguments[1] ? arguments[1] : null,
      n = arguments.length > 2 && true !== arguments[2] ? arguments[2] : {
        openWithoutBackstack: false
      };
    Chunk570140.Z.dispatch(p({
      type: "USER_SETTINGS_MODAL_OPEN",
      section: module,
      subsection: exports
    }, require)), (0, Chunk37234.jN)(Chunk981631.S9g.USER_SETTINGS)
  },
  init: function(e) {
    let t = arguments.length > 1 && true !== arguments[1] ? arguments[1] : null,
      n = arguments.length > 2 ? arguments[2] : true;
    a.Z.dispatch(p({
      type: "USER_SETTINGS_MODAL_INIT",
      section: e,
      subsection: t
    }, n))
  },
  close() {
    let e = Chunk663389.Z.onClose;
    Chunk570140.Z.dispatch({
      type: "USER_SETTINGS_MODAL_CLOSE"
    }), null != module && module()
  },
  setSection(e) {
    let t = arguments.length > 1 && true !== arguments[1] ? arguments[1] : null,
      n = arguments.length > 2 && true !== arguments[2] ? arguments[2] : {};
    a.Z.dispatch(p({
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
    Chunk570140.Z.dispatch({
      type: "USER_SETTINGS_MODAL_SUBMIT_COMPLETE"
    })
  },
  reset() {
    Chunk570140.Z.dispatch({
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
      emailToken: c,
      password: _,
      avatar: h,
      newPassword: g,
      discriminator: E
    } = e, {
      close: b
    } = t;
    return (0, l.Z)(e => {
      let t = m(p({
          username: n,
          email: s,
          email_token: c,
          password: _,
          avatar: h,
          new_password: g
        }, e), {
          discriminator: null != E && "" !== E ? E : true
        }),
        a = i.K.get(u.JkL),
        o = (0, d.xJ)();
      null != o && null != a && (t.push_provider = o, t.push_token = a);
      let l = i.K.get(u.scU);
      return null != d.mv && null != l && (t.push_voip_provider = d.mv, t.push_voip_token = l), r.tn.patch({
        url: u.ANM.ME,
        oldFormErrors: true,
        body: t,
        rejectWithError: false
      })
    }, {
      checkEnabled: false,
      modalProps: {
        title: f.intl.string(f.t.clQc1d)
      },
      hooks: {
        onEarlyClose: () => a.Z.dispatch({
          type: "USER_SETTINGS_MODAL_SUBMIT_FAILURE",
          errors: {}
        })
      }
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
      }), true !== h && (0, o.Z)({
        avatarHash: t.avatar
      }), null != g && a.Z.dispatch({
        type: "USER_PASSWORD_UPDATE",
        user: t,
        newPassword: g
      }), null != _ && null != g && a.Z.dispatch({
        type: "PASSWORD_UPDATED",
        userId: t.id
      }), b ? this.close() : this.submitComplete(), e
    }, e => (a.Z.dispatch({
      type: "USER_SETTINGS_MODAL_SUBMIT_FAILURE",
      errors: e.body
    }), e))
  }
}