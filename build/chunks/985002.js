/** Chunk was on web.js **/
/** chunk id: 985002, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  G: () => l
}), require("./388685.js");
var Chunk473749 = require("./473749.js"),
  Chunk881052 = require("./881052.js"),
  Chunk260722 = require("./260722.js"),
  Chunk914788 = require("./914788.js"),
  Chunk292352 = require("./292352.js");

function l(e) {
  let {
    onError: t,
    onSuccess: n
  } = null != e ? e : {}, [l, c] = r.useState(false), [u, d] = r.useState(false), [f, p] = r.useState(false), [_, m] = r.useState(false), [h, g] = r.useState(false), [E, b] = r.useState(false), [y, O] = r.useState(false), [v, S] = r.useState(false), I = l || u || f || _ || E || v, T = r.useCallback(async e => {
    if (!I) {
      c(true);
      try {
        await (0, a.Yw)(e, s.ne.ACTIVE), null == n || n()
      } catch (n) {
        let e = new i.Hx(n);
        null == t || t(e)
      } finally {
        c(false)
      }
    }
  }, [I, t, n]), A = r.useCallback(async e => {
    if (!I) {
      d(true);
      try {
        await (0, a.Yw)(e, s.ne.DECLINED), null == n || n()
      } catch (n) {
        let e = new i.Hx(n);
        null == t || t(e)
      } finally {
        d(false)
      }
    }
  }, [I, t, n]), C = r.useCallback(async e => {
    if (!I) {
      p(true);
      try {
        await (0, a.Yw)(e, s.ne.INACTIVE), null == n || n()
      } catch (n) {
        let e = new i.Hx(n);
        null == t || t(e)
      } finally {
        p(false)
      }
    }
  }, [I, t, n]), N = r.useCallback(async e => {
    if (!I) {
      m(true);
      try {
        await (0, a.fc)(e), null == n || n()
      } catch (n) {
        let e = new i.Hx(n);
        null == t || t(e)
      } finally {
        m(false)
      }
    }
  }, [I, t, n]), P = r.useCallback(async () => {
    if (!h) {
      g(true);
      try {
        await (0, a.qd)(), null == n || n()
      } catch (n) {
        let e = new i.Hx(n);
        null == t || t(e)
      } finally {
        g(false)
      }
    }
  }, [h, t, n]), R = r.useCallback(async e => {
    if (!y) {
      O(true);
      try {
        await a.ZP.fetchTeenActivity(e), null == n || n()
      } catch (n) {
        let e = new i.Hx(n);
        null == t || t(e)
      } finally {
        O(false)
      }
    }
  }, [y, t, n]);
  return {
    acceptLinkRequest: T,
    declineLinkRequest: A,
    disconnectLinkRequest: C,
    cancelLinkRequest: N,
    selectTeenUser: R,
    getLinkCode: P,
    requestLink: r.useCallback(async (e, r) => {
      if (!E) {
        b(true);
        try {
          await a.ZP.requestLink(e, r), null == n || n()
        } catch (n) {
          let e = new i.Hx(n);
          null == t || t(e)
        } finally {
          b(false)
        }
      }
    }, [E, t, n]),
    loadMore: r.useCallback(async e => {
      let n = o.Z.getActionsForDisplayType(e),
        r = n[n.length - 1],
        s = o.Z.getStartId(),
        l = o.Z.getSelectedTeenId();
      if (!v && null != s && null != l) {
        S(true);
        try {
          await a.ZP.fetchMoreTeenActivity(l, e, s, r.event_id)
        } catch (n) {
          let e = new i.Hx(n);
          null == t || t(e)
        } finally {
          S(false)
        }
      }
    }, [v, t]),
    isAcceptLoading: l,
    isDeclineLoading: u,
    isDisconnectLoading: f,
    isCancelLoading: _,
    isGetLinkCodeLoading: h,
    isSelectTeenUserLoading: y,
    isRequestingLink: E,
    isMoreLoading: v
  }
}