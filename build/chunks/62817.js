/** Chunk was on 89129 **/
n.d(t, {
  Z: () => E
}), n(35282), n(388685), n(358797);
var i, l = n(442837),
  r = n(570140),
  o = n(375954);

function c(e, t, n) {
  return t in e ? Object.defineProperty(e, t, {
    value: n,
    enumerable: !0,
    configurable: !0,
    writable: !0
  }) : e[t] = n, e
}

function a(e) {
  for (var t = 1; t < arguments.length; t++) {
    var n = null != arguments[t] ? arguments[t] : {},
      i = Object.keys(n);
    "function" == typeof Object.getOwnPropertySymbols && (i = i.concat(Object.getOwnPropertySymbols(n).filter(function(e) {
      return Object.getOwnPropertyDescriptor(n, e).enumerable
    }))), i.forEach(function(t) {
      c(e, t, n[t])
    })
  }
  return e
}
let d = Object.freeze([]),
  u = {},
  s = {},
  p = {},
  _ = {},
  f = {};

function g(e, t) {}

function m(e, t) {
  let n = u[e];
  return null != n && (u[e] = n.filter(e => e.id !== t), delete s[t], delete p[t], n.length !== u[e].length)
}

function O(e, t) {
  let n = u[e];
  if (null == n) return !1;
  u[e] = n.map(e => e.id === t.id ? a({}, e, t) : e);
  let i = p[t.id];
  null != i && null != _[i.id] && (_[i.id] = a({}, _[i.id], t))
}
class b extends(i = l.ZP.Store) {
  initialize() {
    this.waitFor(o.Z)
  }
  getFiles(e) {
    var t;
    return null != (t = u[e]) ? t : d
  }
  getMessageForFile(e) {
    return p[e]
  }
  getUploaderFileForMessageId(e) {
    return _[e]
  }
  getUploadAttachments(e) {
    if (null != e) return f[e]
  }
}
c(b, "displayName", "UploadStore");
let E = new b(r.Z, {
  CONNECTION_OPEN: function() {
    f = {}
  },
  LOGOUT: function() {
    f = {}
  },
  UPLOAD_START: function(e) {
    var t, n, i, l;
    let {
      channelId: r,
      file: o,
      uploader: c,
      message: f
    } = e;
    if (c._aborted || c._errored) return;
    let g = null != (t = u[r]) ? t : d;
    if (s[o.id] = c, u[r] = [...g, o], null == f) return;
    p[o.id] = f;
    let {
      items: m
    } = o;
    null != m && (_[f.id] = (i = a({}, o), l = l = {
      items: m
    }, Object.getOwnPropertyDescriptors ? Object.defineProperties(i, Object.getOwnPropertyDescriptors(l)) : (function(e, t) {
      var n = Object.keys(e);
      if (Object.getOwnPropertySymbols) {
        var i = Object.getOwnPropertySymbols(e);
        n.push.apply(n, i)
      }
      return n
    })(Object(l)).forEach(function(e) {
      Object.defineProperty(i, e, Object.getOwnPropertyDescriptor(l, e))
    }), i)), null != (n = f.nonce) || f.id
  },
  UPLOAD_COMPRESSION_PROGRESS: function(e) {
    let {
      channelId: t,
      file: n
    } = e;
    O(t, n)
  },
  UPLOAD_PROGRESS: function(e) {
    let {
      channelId: t,
      file: n
    } = e;
    O(t, n)
  },
  UPLOAD_COMPLETE: function(e) {
    let {
      channelId: t,
      file: n
    } = e;
    return m(t, n.id)
  },
  UPLOAD_FAIL: function(e) {
    let {
      channelId: t,
      file: n
    } = e;
    return m(t, n.id)
  },
  UPLOAD_CANCEL_REQUEST: function(e) {
    let {
      file: t
    } = e, n = s[t.id];
    if (null == n) return !1;
    setImmediate(() => {
      var e;
      return null == (e = n.cancel) ? void 0 : e.call(n)
    })
  },
  UPLOAD_ITEM_CANCEL_REQUEST: function(e) {
    let {
      file: t,
      itemId: n
    } = e, i = s[t.id];
    if (null == i) return !1;
    setImmediate(() => i.cancelItem(n))
  },
  UPLOAD_FILE_UPDATE: function(e) {
    let {
      channelId: t,
      file: n
    } = e, i = p[n.id];
    if (null != i) {
      var l;
      null != (l = i.nonce) || i.id
    }
    O(t, n)
  },
  UPLOAD_RESTORE_FAILED_UPLOAD: function(e) {
    let {
      file: t,
      messageId: n
    } = e;
    _[n] = t
  }
})