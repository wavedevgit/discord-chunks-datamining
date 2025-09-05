/** Chunk was on 93886 **/
/** chunk id: 233807, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  Z: () => v
});
var Chunk951288 = require("./951288.js"),
  Chunk647438 = require("./647438.js"),
  Chunk481060 = require("./481060.js"),
  Chunk881052 = require("./881052.js"),
  Chunk972959 = require("./972959.js"),
  Chunk729345 = require("./729345.js"),
  Chunk823385 = require("./823385.js"),
  Chunk620481 = require("./620481.js"),
  Chunk981631 = require("./981631.js"),
  Chunk590075 = require("./590075.js");
let x = (0, Chunk972959.H)(() => ({
  includeFrecency: true,
  includeFriends: true,
  includeGDMs: true,
  includeDMs: true,
  includeQuickSwitcherState: true,
  snapshotUploading: false,
  snapshotSuccess: false,
  snapshotError: null,
  sessionRecording: false,
  sessionUploading: false,
  sessionSuccess: false,
  sessionError: null
}));

function h(e) {
  let {
    uploading: t,
    success: n,
    error: r,
    onClick: i,
    title: s
  } = e;
  return (0, a.jsxs)(a.Fragment, {
    children: [(0, a.jsx)(l.zxk, {
      variant: "primary",
      onClick: i,
      loading: t,
      disabled: t,
      text: t ? "Uploading…" : s
    }), null != r && (0, a.jsx)(l.R94, {
      type: l.geA.ERROR,
      className: m.statusText,
      children: r
    }), n && (0, a.jsx)(l.R94, {
      type: l.geA.SUCCESS,
      className: m.statusText,
      children: "Logs uploaded successfully"
    })]
  })
}

function p() {
  let e = x.useField("snapshotUploading"),
    t = x.useField("snapshotSuccess"),
    n = x.useField("snapshotError"),
    l = Chunk647438.useCallback(async () => {
      let {
        includeFrecency: e,
        includeFriends: t,
        includeGDMs: n,
        includeDMs: a,
        includeQuickSwitcherState: r,
        snapshotUploading: l
      } = x.getState();
      if (!Chunk481060) try {
        x.setState({
          snapshotUploading: true,
          snapshotError: null,
          snapshotSuccess: false
        }), exports && (0, Chunk620481.lG)(), require && (0, Chunk620481.mo)(), Chunk951288 && (0, Chunk620481.FB)(), module && (0, Chunk620481.Sr)(), Chunk647438 && (0, Chunk620481.OC)(), await (0, Chunk729345.E)(Chunk981631.GU0.WEB_APP), x.setState({
          snapshotSuccess: true,
          snapshotError: null
        })
      } catch (t) {
        let e = new Chunk881052.Hx(exports);
        x.setState({
          snapshotError: module.getAnyErrorMessage()
        })
      } finally {
        x.setState({
          snapshotUploading: false
        })
      }
    }, []);
  return (0, Chunk951288.jsx)(h, {
    uploading: module,
    success: exports,
    error: require,
    onClick: Chunk481060,
    title: "Upload Snapshot Logs"
  })
}

function f() {
  let e = x.useField("sessionUploading"),
    t = x.useField("sessionSuccess"),
    n = x.useField("sessionError"),
    l = Chunk647438.useCallback(async () => {
      let {
        sessionUploading: e
      } = x.getState();
      if (!module) try {
        x.setState({
          sessionRecording: false,
          sessionUploading: true,
          sessionError: null,
          sessionSuccess: false
        }), await (0, Chunk729345.E)(Chunk981631.GU0.WEB_APP), x.setState({
          sessionSuccess: true,
          sessionError: null
        })
      } catch (t) {
        let e = new Chunk881052.Hx(exports);
        x.setState({
          sessionError: module.getAnyErrorMessage()
        })
      } finally {
        x.setState({
          sessionUploading: false
        })
      }
    }, []);
  return (0, Chunk951288.jsx)(h, {
    uploading: module,
    success: exports,
    error: require,
    onClick: Chunk481060,
    title: "Upload Session Logs"
  })
}

function v() {
  let e = x.useField("sessionRecording"),
    t = x.useField("includeFrecency"),
    n = x.useField("includeFriends"),
    i = x.useField("includeGDMs"),
    s = x.useField("includeDMs"),
    o = x.useField("includeQuickSwitcherState"),
    u = Chunk647438.useRef([]),
    h = Chunk647438.useRef(""),
    v = Chunk647438.useCallback(() => {
      let {
        results: e,
        query: t
      } = Chunk823385.Z.getProps();
      (Chunk981631.current !== module || h.current !== exports) && (Chunk981631.current = module, h.current = exports, (0, Chunk620481.OC)())
    }, []);
  return Chunk647438.useEffect(() => {
    if (module) return Chunk823385.Z.addChangeListener(v), () => Chunk823385.Z.removeChangeListener(v)
  }, [v, module]), (0, Chunk951288.jsxs)(Chunk481060.zJl, {
    className: Chunk590075.panel,
    children: [(0, Chunk951288.jsxs)(Chunk481060.hjN, {
      title: "Debug Logs Session",
      tag: Chunk481060.RB0.H3,
      className: Chunk590075.panelGroup,
      children: [(0, Chunk951288.jsx)(Chunk481060.R94, {
        type: Chunk481060.geA.DESCRIPTION,
        className: Chunk590075.subtitle,
        children: "Click to emit debug logs as you search in the Quick Switcher. Includes your search term and all results. For each result, includes the record id, associated names, and frecency scores."
      }), (0, Chunk951288.jsx)(Chunk481060.R94, {
        type: Chunk481060.geA.DESCRIPTION,
        className: Chunk590075.subtitle,
        children: "When you are done, please remember to upload the logs."
      }), (0, Chunk951288.jsxs)(Chunk481060.hE2, {
        children: [(0, Chunk951288.jsx)(Chunk481060.zxk, {
          variant: module ? "critical-primary" : "primary",
          onClick: () => x.setState({
            sessionRecording: !module
          }),
          text: module ? "Stop Recording" : "Start Recording"
        }), (0, Chunk951288.jsx)(f, {})]
      })]
    }), (0, Chunk951288.jsxs)(Chunk481060.hjN, {
      title: "Debug Logs Snapshot",
      tag: Chunk481060.RB0.H3,
      className: Chunk590075.panelGroup,
      children: [(0, Chunk951288.jsx)(Chunk481060.R94, {
        type: Chunk481060.geA.DESCRIPTION,
        className: Chunk590075.subtitle,
        children: "Uploading a snapshot of the client state can help us figure out what exactly is wrong with your search. You can opt out of uploading certain logs, but it may make it more difficult to debug your issue."
      }), (0, Chunk951288.jsx)(Chunk481060.j7V, {
        value: exports,
        onChange: () => x.setState({
          includeFrecency: !exports
        }),
        note: "Frecency is a measure of how often you visit a guild or channel. Includes frecency scores for guilds and channels along with the guild or channel IDs.",
        children: "Frecency"
      }), (0, Chunk951288.jsx)(Chunk481060.j7V, {
        value: require,
        onChange: () => x.setState({
          includeFriends: !require
        }),
        note: "Includes all Discord Friend usernames, global names, and nicknames.",
        children: "Friends"
      }), (0, Chunk951288.jsx)(Chunk481060.j7V, {
        value: Chunk972959,
        onChange: () => x.setState({
          includeDMs: !Chunk972959
        }),
        note: "Includes recipient user ids, usernames, global names, nicknames for all DMs. Does NOT include any message data.",
        children: "DMs"
      }), (0, Chunk951288.jsx)(Chunk481060.j7V, {
        value: Chunk881052,
        onChange: () => x.setState({
          includeGDMs: !Chunk881052
        }),
        note: "Includes recipient user ids, usernames, global names, nicknames, and custom channel names for all Group DMs. Does NOT include any message data.",
        children: "Group DMs"
      }), (0, Chunk951288.jsx)(Chunk481060.j7V, {
        value: Chunk729345,
        onChange: () => x.setState({
          includeQuickSwitcherState: !Chunk729345
        }),
        note: "Includes the current QuickSwitcher query and results. If you include this, please ensure the QuickSwitcher is open when you click to Upload Snapshot Logs.",
        hideBorder: true,
        children: "Quick Switcher State"
      }), (0, Chunk951288.jsx)(p, {})]
    })]
  })
}