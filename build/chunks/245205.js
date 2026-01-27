/** Chunk was on 77870 **/
/** chunk id: 245205, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  BZ: () => p,
  R7: () => g,
  S3: () => h,
  VP: () => b,
  ni: () => f
});
var Chunk110259 = require("./110259.js"),
  Chunk562465 = require("./562465.js"),
  Chunk933681 = require("./933681.js"),
  Chunk73153 = require("./73153.js"),
  Chunk253932 = require("./253932.js"),
  Chunk499785 = require("./499785.js"),
  Chunk252431 = require("./252431.js"),
  Chunk995273 = require("./995273.js"),
  Chunk652215 = require("./652215.js");

function p(e) {
  s.h.dispatch({
    type: "NOTIFICATION_CENTER_SET_ACTIVE",
    active: e
  })
}

function h() {
  s.h.dispatch({
    type: "RESET_NOTIFICATION_CENTER"
  })
}
async function f(e, t) {
  if (c.A.loading) return;
  await s.h.dispatch({
    type: "LOAD_NOTIFICATION_CENTER_ITEMS"
  });
  let n = Math.ceil(c.A.items.length / e.limit);
  try {
    let l = await o.A.get({
      url: d.Rsh.NOTIF_CENTER_ITEMS(),
      trackedActionData: {
        event: r.NetworkActionNames.NOTIFICATION_CENTER_PAGE_FETCH,
        properties: e => {
          var t;
          let r = ((null == (t = e.body) ? true : t.items) || []).map(e => e.type);
          return (0, i.e0)({
            page: n,
            items: r,
            item_count: r.length
          })
        }
      },
      query: function(e) {
        for (var t = 1; t < arguments.length; t++) {
          var n = null != arguments[t] ? arguments[t] : {},
            r = Object.keys(n);
          "function" == typeof Object.getOwnPropertySymbols && (r = r.concat(Object.getOwnPropertySymbols(n).filter(function(e) {
            return Object.getOwnPropertyDescriptor(n, e).enumerable
          }))), r.forEach(function(t) {
            var r;
            r = n[t], t in e ? Object.defineProperty(e, t, {
              value: r,
              enumerable: true,
              configurable: true,
              writable: true
            }) : e[t] = r
          })
        }
        return e
      }({}, e),
      rejectWithError: true
    });
    null == t || t(), await s.h.dispatch({
      type: "LOAD_NOTIFICATION_CENTER_ITEMS_SUCCESS",
      items: l.body.items,
      cursor: l.body.cursor,
      hasMore: l.body.has_more
    })
  } catch (e) {
    null == t || t(), await s.h.dispatch({
      type: "LOAD_NOTIFICATION_CENTER_ITEMS_FAILURE"
    })
  }
}

function g(e) {
  var t, n;
  null != e.local_id ? (t = [e.local_id], s.h.dispatch({
    type: "NOTIFICATION_CENTER_ITEMS_LOCAL_ACK",
    localIds: t
  })) : (0, u.gk)(e) ? (n = e.id, s.h.dispatch({
    type: "NOTIFICATION_CENTER_ITEMS_ACK",
    optimistic: true,
    ids: [n]
  })) : m(e.id)
}
async function m(e) {
  try {
    s.h.dispatch({
      type: "NOTIFICATION_CENTER_ITEMS_ACK",
      optimistic: true,
      ids: [e]
    }), await l.Bo.post({
      url: d.Rsh.NOTIF_CENTER_ITEMS_ACK(e),
      rejectWithError: true
    })
  } catch (t) {
    s.h.dispatch({
      type: "NOTIFICATION_CENTER_ITEMS_ACK_FAILURE",
      ids: [e]
    })
  }
}
async function b(e) {
  let t = a.ns.getSetting();
  try {
    s.h.dispatch({
      type: "NOTIFICATION_CENTER_ITEM_DELETE",
      id: e.id
    }), await o.A.delete({
      url: d.Rsh.NOTIF_CENTER_ITEMS(e.id),
      body: {
        item_type: (0, u.gk)(e) ? "mention" : "regular"
      },
      trackedActionData: {
        event: r.NetworkActionNames.NOTIFICATION_CENTER_ITEM_DELETE,
        properties: {
          notification_center_id: e.id,
          acked: (0, u.NW)(e, t),
          item_type: e.type
        }
      },
      rejectWithError: false
    })
  } catch (t) {
    throw s.h.dispatch({
      type: "NOTIFICATION_CENTER_ITEM_DELETE_FAILURE",
      item: e
    }), t
  }
}