/** Chunk was on 93886 **/
/** chunk id: 233807, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  Z: () => T
}), require("./388685.js");
var Chunk951288 = require("./951288.js"),
  Chunk647438 = require("./647438.js"),
  Chunk481060 = require("./481060.js"),
  Chunk881052 = require("./881052.js"),
  Chunk972959 = require("./972959.js"),
  Chunk933557 = require("./933557.js"),
  Chunk729345 = require("./729345.js"),
  Chunk305347 = require("./305347.jsx"),
  Chunk823385 = require("./823385.js"),
  Chunk620481 = require("./620481.js"),
  Chunk592125 = require("./592125.js"),
  Chunk430824 = require("./430824.js"),
  Chunk699516 = require("./699516.js"),
  Chunk594174 = require("./594174.js"),
  Chunk981631 = require("./981631.js"),
  Chunk727081 = require("./727081.js");
let g = (0, Chunk972959.H)(() => ({
  includeFrecency: true,
  includeFriends: true,
  includeGDMs: true,
  includeDMs: true,
  includeQuickSwitcherState: true,
  includeUserSearchWorkerState: true,
  snapshotUploading: false,
  snapshotSuccess: false,
  snapshotError: null,
  sessionRecording: false,
  sessionUploading: false,
  sessionSuccess: false,
  sessionError: null,
  targetUserId: null,
  targetUserState: null,
  targetUserStateLoading: false,
  targetUserStateError: null
}));

function j(e) {
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
    }), null != r && (0, a.jsx)(l.Text, {
      variant: "text-sm/normal",
      color: "text-feedback-critical",
      className: b.statusText,
      children: r
    }), n && (0, a.jsx)(l.Text, {
      variant: "text-sm/normal",
      color: "text-feedback-positive",
      className: b.statusText,
      children: "Logs uploaded successfully"
    })]
  })
}

function _() {
  let e = g.useField("snapshotUploading"),
    t = g.useField("snapshotSuccess"),
    n = g.useField("snapshotError"),
    l = Chunk647438.useCallback(async () => {
      let {
        includeFrecency: e,
        includeFriends: t,
        includeGDMs: n,
        includeDMs: a,
        includeQuickSwitcherState: r,
        includeUserSearchWorkerState: l,
        snapshotUploading: s
      } = g.getState();
      if (!Chunk972959) try {
        g.setState({
          snapshotUploading: true,
          snapshotError: null,
          snapshotSuccess: false
        }), exports && (0, Chunk620481.lG)(), require && (0, Chunk620481.mo)(), Chunk951288 && (0, Chunk620481.FB)(), module && (0, Chunk620481.Sr)(), Chunk647438 && (0, Chunk620481.OC)(), Chunk481060 && (0, Chunk620481.Jt)(), await (0, Chunk729345.E)(Chunk981631.GU0.WEB_APP), g.setState({
          snapshotSuccess: true,
          snapshotError: null
        })
      } catch (t) {
        let e = new Chunk881052.Hx(exports);
        g.setState({
          snapshotError: module.getAnyErrorMessage()
        })
      } finally {
        g.setState({
          snapshotUploading: false
        })
      }
    }, []);
  return (0, Chunk951288.jsx)(j, {
    uploading: module,
    success: exports,
    error: require,
    onClick: Chunk481060,
    title: "Upload Snapshot Logs"
  })
}

function y() {
  let e = g.useField("sessionUploading"),
    t = g.useField("sessionSuccess"),
    n = g.useField("sessionError"),
    l = Chunk647438.useCallback(async () => {
      let {
        sessionUploading: e
      } = g.getState();
      if (!module) try {
        g.setState({
          sessionRecording: false,
          sessionUploading: true,
          sessionError: null,
          sessionSuccess: false
        }), await (0, Chunk729345.E)(Chunk981631.GU0.WEB_APP), g.setState({
          sessionSuccess: true,
          sessionError: null
        })
      } catch (t) {
        let e = new Chunk881052.Hx(exports);
        g.setState({
          sessionError: module.getAnyErrorMessage()
        })
      } finally {
        g.setState({
          sessionUploading: false
        })
      }
    }, []);
  return (0, Chunk951288.jsx)(j, {
    uploading: module,
    success: exports,
    error: require,
    onClick: Chunk481060,
    title: "Upload Session Logs"
  })
}

function C(e) {
  let {
    title: t,
    guildIds: n
  } = e;
  return (0, a.jsxs)(a.Fragment, {
    children: [(0, a.jsx)("div", {
      className: b.detailsRow,
      children: (0, a.jsx)(l.R94, {
        children: t
      })
    }), (0, a.jsxs)("div", {
      className: b.detailsList,
      children: [0 === n.length && (0, a.jsx)("div", {
        className: b.detailsRow,
        children: (0, a.jsx)(l.R94, {
          children: "None"
        })
      }), n.map(e => {
        let t = h.Z.getGuild(e);
        return null == t ? null : (0, a.jsxs)("div", {
          className: b.detailsRow,
          children: [(0, a.jsx)(d.ZP, {
            guild: t,
            iconSize: 16
          }), (0, a.jsx)(l.R94, {
            children: t.name
          })]
        }, e)
      })]
    })]
  })
}

function N(e) {
  var t;
  let {
    userState: n
  } = e, {
    user: i,
    searchWorkerUser: s,
    guildMembers: c,
    guildMemberRequests: u
  } = n, m = r.useCallback(e => {
    let {
      ok: t
    } = e;
    return t ? (0, a.jsx)(l.owK, {
      size: "sm",
      color: l.TVs.colors.STATUS_POSITIVE
    }) : (0, a.jsx)(l.Mgn, {
      size: "sm",
      color: l.TVs.colors.STATUS_DANGER
    })
  }, []);
  return (0, a.jsxs)("div", {
    className: b.checklist,
    children: [(0, a.jsxs)("div", {
      className: b.checklistItem,
      children: [m({
        ok: null != i
      }), (0, a.jsx)(l.R94, {
        children: null != i ? "User exists in UserStore" : "User does not exist in UserStore"
      })]
    }), null != i && (0, a.jsx)("div", {
      className: b.detailsList,
      children: (0, a.jsx)("div", {
        className: b.detailsRow,
        children: (0, a.jsx)(l.R94, {
          children: "username: ".concat(i.username)
        })
      })
    }), (0, a.jsxs)("div", {
      className: b.checklistItem,
      children: [m({
        ok: null != s
      }), (0, a.jsx)(l.R94, {
        children: null != s ? "User exists in User Search Worker" : "User does not exist in User Search Worker"
      })]
    }), null != s && (0, a.jsxs)("div", {
      className: b.detailsList,
      children: [(0, a.jsx)("div", {
        className: b.detailsRow,
        children: (0, a.jsx)(l.R94, {
          children: "username: ".concat(s.username)
        })
      }), (0, a.jsx)("div", {
        className: b.detailsRow,
        children: (0, a.jsx)(l.R94, {
          children: "global name: ".concat(null != (t = s.globalName) ? t : "—")
        })
      }), (0, a.jsx)("div", {
        className: b.detailsRow,
        children: (0, a.jsx)(l.R94, {
          children: "nicknames:"
        })
      }), (0, a.jsxs)("div", {
        className: b.detailsList,
        children: [0 === Object.keys(s.nicknames).length && (0, a.jsx)("div", {
          className: b.detailsRow,
          children: (0, a.jsx)(l.R94, {
            children: "None"
          })
        }), Object.entries(s.nicknames).map(e => {
          let [t, n] = e, r = h.Z.getGuild(t), i = x.Z.getChannel(t);
          return (0, a.jsxs)("div", {
            className: b.detailsRow,
            children: [null != r && (0, a.jsx)(d.ZP, {
              guild: r,
              iconSize: 16
            }), null != r && (0, a.jsx)(l.R94, {
              children: r.name
            }), null == r && null != i && (0, a.jsx)(l.R94, {
              children: (0, o.F6)(i, f.default, p.Z)
            }), (0, a.jsx)(l.R94, {
              children: " (".concat(t, ")")
            }), null != n && "" !== n && (0, a.jsx)(l.R94, {
              children: " - ".concat(n)
            })]
          }, t)
        })]
      })]
    }), (0, a.jsxs)("div", {
      className: b.checklistItem,
      children: [m({
        ok: c.length > 0
      }), (0, a.jsx)(l.R94, {
        children: c.length > 0 ? "Guild members exist:" : "No guild members exist"
      })]
    }), c.length > 0 && (0, a.jsx)("div", {
      className: b.detailsList,
      children: c.map(e => {
        var t;
        let n = h.Z.getGuild(e.guildId);
        if (null == n) return null;
        let r = null != (t = e.nick) ? t : "";
        return (0, a.jsxs)("div", {
          className: b.detailsRow,
          children: [(0, a.jsx)(d.ZP, {
            guild: n,
            iconSize: 16
          }), (0, a.jsxs)(l.R94, {
            children: [n.name, "" !== r ? " - ".concat(r) : ""]
          })]
        }, "".concat(e.guildId))
      })
    }), (0, a.jsxs)("div", {
      className: b.checklistItem,
      children: [(0, a.jsx)(l.d3s, {
        size: "sm"
      }), (0, a.jsx)(l.R94, {
        children: "GuildMemberRequesterStore State"
      })]
    }), null != u && (0, a.jsxs)("div", {
      className: b.detailsList,
      children: [(0, a.jsx)(C, {
        title: "Pending Guild Member Requests:",
        guildIds: u.pendingRequestGuildIds
      }), (0, a.jsx)(C, {
        title: "Sent Guild Member Requests:",
        guildIds: u.sentRequestGuildIds
      }), (0, a.jsx)(C, {
        title: "Unacknowledged Guild Member Requests:",
        guildIds: u.unacknowledgedRequestGuildIds
      })]
    })]
  })
}

function E() {
  let e = Chunk647438.useCallback(e => {
      g.setState({
        targetUserId: e,
        targetUserState: null
      })
    }, []),
    t = Chunk647438.useCallback(async () => {
      let {
        targetUserId: e,
        targetUserStateLoading: t
      } = g.getState();
      if (!exports && null != module) {
        g.setState({
          targetUserStateLoading: true,
          targetUserStateError: null
        });
        try {
          let t = await (0, Chunk620481.V_)(module);
          g.setState({
            targetUserState: exports,
            targetUserStateLoading: false
          })
        } catch (t) {
          let e = new Chunk881052.Hx(exports);
          g.setState({
            targetUserStateError: module.getAnyErrorMessage(),
            targetUserStateLoading: false
          })
        } finally {
          g.setState({
            targetUserStateLoading: false
          })
        }
      }
    }, []),
    n = g.useField("targetUserStateLoading"),
    s = g.useField("targetUserState"),
    o = g.useField("targetUserStateError");
  return (0, Chunk951288.jsxs)(Chunk951288.Fragment, {
    children: [(0, Chunk951288.jsxs)("div", {
      className: Chunk727081.inputWithButtonRow,
      children: [(0, Chunk951288.jsx)(Chunk481060.oil, {
        placeholder: "User ID",
        onChange: module
      }), (0, Chunk951288.jsx)(Chunk481060.zxk, {
        onClick: exports,
        text: "Get Snapshot",
        loading: require,
        disabled: require
      })]
    }), null != Chunk933557 && (0, Chunk951288.jsx)(Chunk481060.Text, {
      variant: "text-sm/normal",
      color: "text-feedback-critical",
      className: Chunk727081.statusText,
      children: Chunk933557
    }), null != Chunk972959 && (0, Chunk951288.jsx)(N, {
      userState: Chunk972959
    })]
  })
}

function T() {
  let e = g.useField("sessionRecording"),
    t = g.useField("includeFrecency"),
    n = g.useField("includeFriends"),
    i = g.useField("includeGDMs"),
    s = g.useField("includeDMs"),
    o = g.useField("includeQuickSwitcherState"),
    c = g.useField("includeUserSearchWorkerState"),
    d = Chunk647438.useRef([]),
    x = Chunk647438.useRef(""),
    h = Chunk647438.useCallback(() => {
      let {
        results: e,
        query: t
      } = Chunk823385.Z.getProps();
      (Chunk305347.current !== module || Chunk592125.current !== exports) && (Chunk305347.current = module, Chunk592125.current = exports, (0, Chunk620481.OC)())
    }, []);
  return Chunk647438.useEffect(() => {
    if (module) return Chunk823385.Z.addChangeListener(Chunk430824), () => Chunk823385.Z.removeChangeListener(Chunk430824)
  }, [Chunk430824, module]), (0, Chunk951288.jsxs)(Chunk481060.zJl, {
    className: Chunk727081.panel,
    children: [(0, Chunk951288.jsxs)(Chunk481060.hjN, {
      title: "Debug Logs Session",
      tag: Chunk481060.RB0.H3,
      className: Chunk727081.panelGroup,
      children: [(0, Chunk951288.jsx)(Chunk481060.R94, {
        type: Chunk481060.geA.DESCRIPTION,
        className: Chunk727081.subtitle,
        children: "Click to emit debug logs as you search in the Quick Switcher. Includes your search term and all results. For each result, includes the record id, associated names, and frecency scores."
      }), (0, Chunk951288.jsx)(Chunk481060.R94, {
        type: Chunk481060.geA.DESCRIPTION,
        className: Chunk727081.subtitle,
        children: "When you are done, please remember to upload the logs."
      }), (0, Chunk951288.jsxs)(Chunk481060.hE2, {
        children: [(0, Chunk951288.jsx)(Chunk481060.zxk, {
          variant: module ? "critical-primary" : "primary",
          onClick: () => g.setState({
            sessionRecording: !module
          }),
          text: module ? "Stop Recording" : "Start Recording"
        }), (0, Chunk951288.jsx)(y, {})]
      })]
    }), (0, Chunk951288.jsxs)(Chunk481060.hjN, {
      title: "Debug Logs Snapshot",
      tag: Chunk481060.RB0.H3,
      className: Chunk727081.panelGroup,
      children: [(0, Chunk951288.jsx)(Chunk481060.R94, {
        type: Chunk481060.geA.DESCRIPTION,
        className: Chunk727081.subtitle,
        children: "Uploading a snapshot of the client state can help us figure out what exactly is wrong with your search. You can opt out of uploading certain logs, but it may make it more difficult to debug your issue."
      }), (0, Chunk951288.jsx)(Chunk481060.j7V, {
        value: exports,
        onChange: () => g.setState({
          includeFrecency: !exports
        }),
        note: "Frecency is a measure of how often you visit a guild or channel. Includes frecency scores for guilds and channels along with the guild or channel IDs.",
        children: "Frecency"
      }), (0, Chunk951288.jsx)(Chunk481060.j7V, {
        value: require,
        onChange: () => g.setState({
          includeFriends: !require
        }),
        note: "Includes all Discord Friend usernames, global names, and nicknames.",
        children: "Friends"
      }), (0, Chunk951288.jsx)(Chunk481060.j7V, {
        value: Chunk972959,
        onChange: () => g.setState({
          includeDMs: !Chunk972959
        }),
        note: "Includes recipient user ids, usernames, global names, nicknames for all DMs. Does NOT include any message data.",
        children: "DMs"
      }), (0, Chunk951288.jsx)(Chunk481060.j7V, {
        value: Chunk881052,
        onChange: () => g.setState({
          includeGDMs: !Chunk881052
        }),
        note: "Includes recipient user ids, usernames, global names, nicknames, and custom channel names for all Group DMs. Does NOT include any message data.",
        children: "Group DMs"
      }), (0, Chunk951288.jsx)(Chunk481060.j7V, {
        value: Chunk933557,
        onChange: () => g.setState({
          includeQuickSwitcherState: !Chunk933557
        }),
        note: "Includes the current QuickSwitcher query and results. If you include this, please ensure the QuickSwitcher is open when you click to Upload Snapshot Logs.",
        children: "Quick Switcher Results"
      }), (0, Chunk951288.jsx)(Chunk481060.j7V, {
        value: Chunk729345,
        onChange: () => g.setState({
          includeUserSearchWorkerState: !Chunk729345
        }),
        note: "Includes all users that your client knows about. For each user, includes the user id, username, nickname, and any guild nicknames.",
        hideBorder: true,
        children: "User Search Worker"
      }), (0, Chunk951288.jsx)(_, {})]
    }), (0, Chunk951288.jsxs)(Chunk481060.hjN, {
      title: "Debug User State",
      tag: Chunk481060.RB0.H3,
      className: Chunk727081.panelGroup,
      children: [(0, Chunk951288.jsx)(Chunk481060.R94, {
        type: Chunk481060.geA.DESCRIPTION,
        className: Chunk727081.subtitle,
        children: "Paste a user ID below to get a snapshot of client state for the user. This does not generate any logs."
      }), (0, Chunk951288.jsx)(E, {})]
    })]
  })
}