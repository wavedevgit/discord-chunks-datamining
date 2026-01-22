/** Chunk was on web.js **/
/** chunk id: 962052, original params: e,t,n (module,exports,re quire) **/
"use strict";
let r, i;
require.d(exports, {
  A: () => O
}), require("./896048.js"), require("./65821.js"), require("./457529.js");
var Chunk73153 = require("./73153.js"),
  Chunk274593 = require("./274593.js"),
  Chunk626584 = require("./626584.js"),
  Chunk287809 = require("./287809.js"),
  Chunk422033 = require("./422033.js"),
  Chunk954571 = require("./954571.js"),
  Chunk723702 = require("./723702.js"),
  Chunk837921 = require("./837921.js"),
  Chunk652215 = require("./652215.js"),
  Chunk613057 = require("./613057.js");
let h = new Chunk626584.A("NativeDispatchUtils");

function m() {
  return null != r ? Promise.resolve(r) : (0, d.isDesktop)() ? Promise.all([f.Ay.ensureModule("discord_dispatch"), f.Ay.ensureModule("discord_modules")]).then(() => {
    f.Ay.requireModule("discord_modules");
    let e = f.Ay.getDispatch();
    return null != e ? (r = e, e) : Promise.reject(Error("dispatch not found"))
  }) : Promise.reject(Error("not desktop client"))
}

function g() {
  return null == i && h.warn("Tried getting Dispatch instance before instantiated"), i
}

function E(e) {
  let t = JSON.parse(e);
  return h.log("Native Dispatch error", t), new s.A(t)
}

function b(e, t) {
  "" !== e && E(e)
}

function y(e) {
  let {
    properties: t
  } = e;
  switch (null != t.stage && null != t.stage.type && (t.stage = t.stage.type), e.event_name) {
    case p.HAw.DISPATCH_PATCH_STARTED:
    case p.HAw.DISPATCH_PATCH_PAUSED:
    case p.HAw.DISPATCH_PATCH_FAILED:
    case p.HAw.DISPATCH_PATCH_VERIFICATION_FAILED:
    case p.HAw.DISPATCH_PATCH_COMPLETE:
    case p.HAw.DISPATCH_PATCH_CANCELLED:
    case p.HAw.DISPATCH_APPLICATION_UNINSTALLED:
      u.default.track(e.event_name, t)
  }
}
let O = {
  init(e) {
    let {
      userToken: t,
      userId: n,
      installPaths: r,
      platform: a,
      stateCallback: s,
      errorCallback: o
    } = e;
    null == i && m().then(e => {
      let c = {
          environment: window.GLOBAL_ENV.RELEASE_CHANNEL,
          build_number: "488358"
        },
        u = l.default.getCurrentUser();
      null != u && (c.user_id = u.id, c.user_name = u.tag, null != u.email && (c.email = u.email));
      let d = {
        user_token: t,
        user_id: n,
        install_paths: r.map(e => {
          let {
            path: t
          } = e;
          return t
        }),
        api_endpoint: "".concat("https:").concat(window.GLOBAL_ENV.API_ENDPOINT),
        environment: window.GLOBAL_ENV.PROJECT_ENV,
        sentry: c,
        platform: a
      };
      i = new e.Dispatch(JSON.stringify(d), e => {
        let t = JSON.parse(e);
        s({
          applications: t.applications,
          paused: t.paused,
          currentTask: null != t.current_task ? {
            applicationId: t.current_task.application_id,
            branchId: t.current_task.branch_id
          } : null,
          nextTask: null != t.next_task ? {
            applicationId: t.next_task.application_id,
            branchId: t.next_task.branch_id
          } : null
        })
      }, e => {
        o(E(e))
      }, e => {
        y(JSON.parse(e))
      })
    })
  },
  destroy() {
    let e = g();
    null != e && true !== e.destroy && (e.destroy(), i = null)
  },
  setTargetManifest(e) {
    let {
      applicationId: t,
      applicationName: n,
      applicationIcon: r,
      branchId: i,
      buildId: a,
      manifestIds: s,
      installationPath: o
    } = e, l = g();
    null != l && l.command(JSON.stringify({
      command: "SetTargetManifest",
      application_id: t,
      application_name: n,
      application_icon: r,
      branch_id: i,
      build_id: a,
      manifest_ids: s,
      install_path: o
    }), b)
  },
  setCurrentTask(e, t, n, r, i) {
    let a = g();
    return null != a && (a.command(JSON.stringify({
      command: "SetCurrentTask",
      application_id: e,
      branch_id: t,
      action: n,
      user_id: r,
      user_token: i
    }), b), true)
  },
  setCredentials(e, t) {
    let n = g();
    null != n && n.command(JSON.stringify({
      command: "SetCredentials",
      user_id: e,
      user_token: t
    }), b)
  },
  cancel(e, t) {
    let n = g();
    null != n && n.command(JSON.stringify({
      command: "Cancel",
      application_id: e,
      branch_id: t
    }), b)
  },
  uninstall(e, t) {
    let n = g();
    null != n && n.command(JSON.stringify({
      command: "Uninstall",
      application_id: e,
      branch_id: t
    }), b)
  },
  pause() {
    let e = g();
    null != e && e.command(JSON.stringify({
      command: "Pause"
    }), b)
  },
  resume() {
    let e = g();
    null != e && e.command(JSON.stringify({
      command: "Resume"
    }), b)
  },
  queryDirectory(e, t) {
    let n = g();
    null != n && n.command(JSON.stringify({
      command: "QueryDirectory",
      path: e
    }), (e, n) => {
      if ("" !== e) t(JSON.parse(e));
      else if (null != n) {
        let e = JSON.parse(n);
        t(null, {
          hasPermission: e.has_permission,
          availableKB: parseInt(e.available_kb),
          totalKB: parseInt(e.total_kb)
        })
      }
    })
  },
  runLaunchSetup: (e, t) => c.A.isRunning() ? Promise.reject(Error("Already running launch setup.")) : (a.h.dispatch({
    type: "DISPATCH_APPLICATION_LAUNCH_SETUP_START"
  }), new Promise((n, r) => {
    let i = g();
    null == i ? r(Error("native dispatch instance not found")) : i.command(JSON.stringify({
      command: "RunLaunchSetup",
      application_id: e,
      branch_id: t
    }), (e, t, i) => {
      if ("" !== e) {
        a.h.dispatch({
          type: "DISPATCH_APPLICATION_LAUNCH_SETUP_COMPLETE"
        });
        let t = E(e);
        a.h.dispatch({
          type: "DISPATCH_APPLICATION_ERROR",
          error: t
        }), null != t.code && t.code === _.Hi.POST_INSTALL_CANCELLED ? r(t) : n();
        return
      }
      if ("" !== t) {
        a.h.dispatch({
          type: "DISPATCH_APPLICATION_LAUNCH_SETUP_COMPLETE"
        }), n();
        return
      }
      if ("" !== i) {
        let e = JSON.parse(i);
        a.h.dispatch({
          type: "DISPATCH_APPLICATION_INSTALL_SCRIPTS_PROGRESS_UPDATE",
          progress: e.progress,
          total: e.total,
          name: e.name
        })
      }
    })
  })),
  launch: (e, t, n, r) => new Promise((i, a) => {
    let s = g();
    if (null == s) return void a(Error("native dispatch instance not found"));

    function o(e, t) {
      "" !== e ? a(E(e)) : i([JSON.parse(t).pid])
    }
    s.command(JSON.stringify({
      command: "Launch",
      application_id: e,
      branch_id: t,
      option_name: n,
      environment: r
    }), o)
  })
}