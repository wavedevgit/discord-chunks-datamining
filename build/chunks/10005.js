/** Chunk was on web.js **/
/** chunk id: 10005, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  A: () => l
}), require("./896048.js");
var Chunk64700 = require("./64700.js"),
  Chunk198982 = require("./198982.js"),
  Chunk899847 = require("./899847.js"),
  Chunk695515 = require("./695515.js"),
  Chunk191627 = require("./191627.js");

function l(e) {
  let {
    onError: t,
    onSuccess: n
  } = null != e ? e : {}, [l, c] = r.useState(false), [u, d] = r.useState(false), [f, p] = r.useState(false), [_, h] = r.useState(false), [m, g] = r.useState(false), [E, y] = r.useState(false), [b, O] = r.useState(false), [v, A] = r.useState(false), I = l || u || f || _ || E || v, S = r.useCallback(async e => {
    if (!I) {
      c(true);
      try {
        await (0, a.nt)(e, o.Ef.ACTIVE), null == n || n()
      } catch (n) {
        let e = new i.LG(n);
        null == t || t(e)
      } finally {
        c(false)
      }
    }
  }, [I, t, n]), T = r.useCallback(async e => {
    if (!I) {
      d(true);
      try {
        await (0, a.nt)(e, o.Ef.DECLINED), null == n || n()
      } catch (n) {
        let e = new i.LG(n);
        null == t || t(e)
      } finally {
        d(false)
      }
    }
  }, [I, t, n]), C = r.useCallback(async e => {
    if (!I) {
      p(true);
      try {
        await (0, a.nt)(e, o.Ef.INACTIVE), null == n || n()
      } catch (n) {
        let e = new i.LG(n);
        null == t || t(e)
      } finally {
        p(false)
      }
    }
  }, [I, t, n]), N = r.useCallback(async e => {
    if (!I) {
      h(true);
      try {
        await (0, a.e$)(e), null == n || n()
      } catch (n) {
        let e = new i.LG(n);
        null == t || t(e)
      } finally {
        h(false)
      }
    }
  }, [I, t, n]), R = r.useCallback(async () => {
    if (!m) {
      g(true);
      try {
        await (0, a.HB)(), null == n || n()
      } catch (n) {
        let e = new i.LG(n);
        null == t || t(e)
      } finally {
        g(false)
      }
    }
  }, [m, t, n]), w = r.useCallback(async e => {
    if (!b) {
      O(true);
      try {
        await a.Ay.fetchTeenActivity(e), null == n || n()
      } catch (n) {
        let e = new i.LG(n);
        null == t || t(e)
      } finally {
        O(false)
      }
    }
  }, [b, t, n]);
  return {
    acceptLinkRequest: S,
    declineLinkRequest: T,
    disconnectLinkRequest: C,
    cancelLinkRequest: N,
    selectTeenUser: w,
    getLinkCode: R,
    requestLink: r.useCallback(async (e, r) => {
      if (!E) {
        y(true);
        try {
          await a.Ay.requestLink(e, r), null == n || n()
        } catch (n) {
          let e = new i.LG(n);
          null == t || t(e)
        } finally {
          y(false)
        }
      }
    }, [E, t, n]),
    loadMore: r.useCallback(async e => {
      let n = s.A.getActionsForDisplayType(e),
        r = n[n.length - 1],
        o = s.A.getStartId(),
        l = s.A.getSelectedTeenId();
      if (!v && null != o && null != l) {
        A(true);
        try {
          await a.Ay.fetchMoreTeenActivity(l, e, o, r.event_id)
        } catch (n) {
          let e = new i.LG(n);
          null == t || t(e)
        } finally {
          A(false)
        }
      }
    }, [v, t]),
    isAcceptLoading: l,
    isDeclineLoading: u,
    isDisconnectLoading: f,
    isCancelLoading: _,
    isGetLinkCodeLoading: m,
    isSelectTeenUserLoading: b,
    isRequestingLink: E,
    isMoreLoading: v
  }
}