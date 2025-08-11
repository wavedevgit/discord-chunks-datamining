/** Chunk was on 75708 **/
/** chunk id: 985002, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  G: () => o
}), require("./388685.js");
var Chunk73800 = require("./73800.js"),
  Chunk881052 = require("./881052.js"),
  Chunk260722 = require("./260722.js"),
  Chunk914788 = require("./914788.js"),
  Chunk292352 = require("./292352.js");

function o(e) {
  let {
    onError: t,
    onSuccess: n
  } = null != e ? e : {}, [o, c] = i.useState(false), [d, u] = i.useState(false), [m, p] = i.useState(false), [g, h] = i.useState(false), [f, b] = i.useState(false), [x, _] = i.useState(false), [j, E] = i.useState(false), [C, O] = i.useState(false), v = o || d || m || g || x || C, S = i.useCallback(async e => {
    if (!v) {
      c(true);
      try {
        await (0, s.Yw)(e.id, l.ne.ACTIVE), null == n || n()
      } catch (n) {
        let e = new r.Hx(n);
        null == t || t(e)
      } finally {
        c(false)
      }
    }
  }, [v, t, n]), T = i.useCallback(async e => {
    if (!v) {
      u(true);
      try {
        await (0, s.Yw)(e.id, l.ne.DECLINED), null == n || n()
      } catch (n) {
        let e = new r.Hx(n);
        null == t || t(e)
      } finally {
        u(false)
      }
    }
  }, [v, t, n]), I = i.useCallback(async e => {
    if (!v) {
      p(true);
      try {
        await (0, s.Yw)(e.id, l.ne.INACTIVE), null == n || n()
      } catch (n) {
        let e = new r.Hx(n);
        null == t || t(e)
      } finally {
        p(false)
      }
    }
  }, [v, t, n]), N = i.useCallback(async e => {
    if (!v) {
      h(true);
      try {
        await (0, s.fc)(e.id), null == n || n()
      } catch (n) {
        let e = new r.Hx(n);
        null == t || t(e)
      } finally {
        h(false)
      }
    }
  }, [v, t, n]), y = i.useCallback(async () => {
    if (!f) {
      b(true);
      try {
        await (0, s.qd)(), null == n || n()
      } catch (n) {
        let e = new r.Hx(n);
        null == t || t(e)
      } finally {
        b(false)
      }
    }
  }, [f, t, n]), A = i.useCallback(async e => {
    if (!j) {
      E(true);
      try {
        await s.ZP.fetchTeenActivity(e), null == n || n()
      } catch (n) {
        let e = new r.Hx(n);
        null == t || t(e)
      } finally {
        E(false)
      }
    }
  }, [j, t, n]);
  return {
    acceptLinkRequest: S,
    declineLinkRequest: T,
    disconnectLinkRequest: I,
    cancelLinkRequest: N,
    selectTeenUser: A,
    getLinkCode: y,
    requestLink: i.useCallback(async (e, i) => {
      if (!x) {
        _(true);
        try {
          await s.ZP.requestLink(e, i), null == n || n()
        } catch (n) {
          let e = new r.Hx(n);
          null == t || t(e)
        } finally {
          _(false)
        }
      }
    }, [x, t, n]),
    loadMore: i.useCallback(async e => {
      let n = a.Z.getActionsForDisplayType(e),
        i = n[n.length - 1],
        l = a.Z.getStartId(),
        o = a.Z.getSelectedTeenId();
      if (!C && null != l && null != o) {
        O(true);
        try {
          await s.ZP.fetchMoreTeenActivity(o, e, l, i.event_id)
        } catch (n) {
          let e = new r.Hx(n);
          null == t || t(e)
        } finally {
          O(false)
        }
      }
    }, [C, t]),
    isAcceptLoading: o,
    isDeclineLoading: d,
    isDisconnectLoading: m,
    isCancelLoading: g,
    isGetLinkCodeLoading: f,
    isSelectTeenUserLoading: j,
    isRequestingLink: x,
    isMoreLoading: C
  }
}