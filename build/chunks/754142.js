/** Chunk was on web.js **/
/** chunk id: 754142, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  b: () => w
}), require("./388685.js");
var Chunk392711 = require("./392711.js"),
  i = require.n(Chunk392711),
  Chunk674466 = require("./674466.js"),
  Chunk798681 = require("./798681.js"),
  Chunk581567 = require("./581567.js"),
  Chunk569545 = require("./569545.js"),
  Chunk450109 = require("./450109.js"),
  Chunk361291 = require("./361291.js"),
  Chunk592125 = require("./592125.js"),
  Chunk131951 = require("./131951.js"),
  Chunk19780 = require("./19780.js"),
  Chunk936349 = require("./936349.js"),
  Chunk944486 = require("./944486.js"),
  Chunk959457 = require("./959457.js"),
  Chunk704806 = require("./704806.js"),
  Chunk626135 = require("./626135.js"),
  Chunk12647 = require("./12647.js"),
  Chunk848479 = require("./848479.js"),
  Chunk458725 = require("./458725.js"),
  Chunk981631 = require("./981631.js"),
  Chunk65154 = require("./65154.js");

function T(e) {
  var t;
  let n = c.Z.getConnectionStats(e);
  return null == n ? null : null != (t = n.stats.rtp.outbound.find(e => "video" === e.type)) ? t : null
}

function S(e, t) {
  var n;
  if (null == t) return null;
  let r = c.Z.getConnectionStats(e);
  if (null == r) return null;
  let i = r.stats.rtp.inbound[t];
  return null == i ? null : null != (n = i.find(e => "video" === e.type)) ? n : null
}

function A(e, t, n) {
  return e ? T(t) : S(t, n)
}

function C(e) {
  var t, n;
  return null != (n = null == (t = c.Z.getConnectionStats(e)) ? true : t.stats.transport.outboundBitrateEstimate) ? n : null
}

function N(e) {
  var t, n;
  return null != (n = null == (t = c.Z.getConnectionStats(e)) ? true : t.stats.transport.inboundBitrateEstimate) ? n : null
}

function R(e) {
  let t = c.Z.getConnectionStats(e),
    n = c.Z.getLastConnectionStats(e);
  if (null == t || null == n) return null;
  let r = {};
  for (let e of ["videohookFrames", "hybridDxgiFrames", "hybridGdiFrames", "hybridVideohookFrames", "hybridGraphicsCaptureFrames", "hybridGdiBitBltFrames", "hybridGdiPrintWindowFrames", "quartzFrames", "screenCaptureKitFrames"]) {
    var i, a, o, s;
    let l = null != (o = null == (i = n.stats.screenshare) ? true : i[e]) ? o : 0,
      c = null != (s = null == (a = t.stats.screenshare) ? true : a[e]) ? s : 0;
    r[e] = c - l
  }
  let l = false,
    u = null;
  for (let [e, t] of Object.entries(r)) t > l && (l = t, u = e);
  return l > 0 ? u : null
}

function P(e) {
  var t, n;
  let r = h.Z.getVoiceChannelId();
  return null != (n = null != (t = "channelId" in e ? e.channelId : true) ? t : r) ? n : null
}

function D(e, t, n) {
  var r, i, a, o;
  return e ? null != (i = null == (r = T(t)) ? true : r.frameRateEncode) ? i : null : null != (o = null == (a = S(t, n)) ? true : a.frameRateDecode) ? o : null
}

function w(e, t) {
  var n, r, c, h, w;
  let x, L = (0, O.hp)(e),
    M = P(t),
    j = d.Z.getChannel(M),
    k = "streamKey" in t ? t.streamKey : true,
    U = "mediaContext" in t ? t.mediaContext : true,
    G = "underlyingError" in t ? t.underlyingError : true,
    B = "errorMessage" in t ? t.errorMessage : true,
    Z = "mediaSessionId" in t ? t.mediaSessionId : true,
    F = "rtcConnectionId" in t ? t.rtcConnectionId : true,
    V = "videoCodec" in t ? t.videoCodec : true,
    H = "videoEncoder" in t ? t.videoEncoder : true,
    Y = "videoDecoder" in t ? t.videoDecoder : true,
    W = "audioCaptureSampleRateMismatchPercent" in t ? t.audioCaptureSampleRateMismatchPercent : true,
    K = "audioInputDeviceName" in t ? t.audioInputDeviceName : true,
    z = "audioOutputDeviceName" in t ? t.audioOutputDeviceName : true,
    q = "videoDeviceName" in t ? t.videoDeviceName : true,
    X = "userId" in t ? t.userId : true,
    Q = null != k ? (0, l.my)(k) : null,
    J = null != k ? m.Z.getRTCConnection(k) : null,
    $ = null != k ? J : _.Z.getRTCConnection(),
    ee = null != k ? null == J || null == (n = J.analyticsContext) ? true : n.streamApplication : null,
    {
      resolution: et,
      fps: en
    } = u.Z.getState(),
    {
      gameName: er,
      gameId: ei,
      exe: ea,
      distributor: eo
    } = (0, s.G8)(ee),
    es = L.isErrorOutbound,
    el = null != U ? U : I.Yn.DEFAULT,
    ec = null != Q ? Q.ownerId : X,
    eu = null != J ? null == J ? true : J.getVoiceParticipantType() : es ? "sender" : "receiver",
    ed = null != (r = null == $ ? true : $.getMediaEngineConnectionId()) ? r : null;
  x = null != k && null != Q ? es ? null == $ || null == (c = $.getOutboundStats()) ? true : c.find(e => e.quality === I.y7) : null == $ ? true : $.getInboundStats(Q.ownerId) : es ? null != (w = i().maxBy(null != (h = null == $ ? true : $.getOutboundStats()) ? h : [], e => e.num_frames)) ? w : null : null != ec ? null == $ ? true : $.getInboundStats(ec) : null, (0, g.q)().then(t => {
    var n, r, i, s, l, c, u, d, h, m, g, O, P, w, k, X, ee, ef, e_, ep, eh, em, eg, eE, eb, ey, eO, ev, eI, eT, eS, eA, eC, eN, eR, eP, eD, ew, ex, eL, eM, ej, ek, eU, eG, eB, eZ, eF, eV;
    let eH = {
      error_name: e.valueOf(),
      error_code: L.errorCode,
      error_severity: L.severity,
      error_category: L.category,
      underlying_error: null != G ? G : null,
      error_message: null != B ? B : null,
      guild_id: null != (w = null == j ? true : j.guild_id) ? w : null,
      channel_id: null != M ? M : null,
      channel_type: null != (k = null == j ? true : j.type) ? k : null,
      rtc_connection_id: null != F ? F : null,
      media_session_id: null != (X = null != Z ? Z : _.Z.getMediaSessionId()) ? X : null,
      parent_media_session_id: null != (ee = null == J ? true : J.parentMediaSessionId) ? ee : null,
      context: null != U ? U : null,
      voice_backend_version: null != (ef = null == (n = _.Z.getRTCConnection()) ? true : n.getVoiceVersion()) ? ef : null,
      rtc_worker_backend_version: null != (e_ = null == (r = _.Z.getRTCConnection()) ? true : r.getRtcWorkerVersion()) ? e_ : null,
      guild_region: null != (ep = p.Z.getRegion(_.Z.getHostname())) ? ep : null,
      hostname: null != (eh = _.Z.getHostname()) ? eh : null,
      duration: null != (em = null == $ ? true : $.getDurationSeconds()) ? em : null,
      participant_type: null != eu ? eu : null,
      num_frames: null != (eg = null == x ? true : x.num_frames) ? eg : 0,
      num_packets: null != (eE = null == x ? true : x.num_packets) ? eE : 0,
      num_bytes: null != (eb = null == x ? true : x.num_bytes) ? eb : 0,
      num_packets_lost: null != (ey = null == (i = A(es, ed, ec)) ? true : i.packetsLost) ? ey : 0,
      video_codec: null != (eO = null != V ? V : (0, a.bU)(null == (s = A(es, ed, ec)) ? true : s.codec.name)) ? eO : null,
      video_encoder: null != (ev = null != H ? H : (0, a.lG)(null == (l = T(ed)) ? true : l.encoderImplementationName)) ? ev : null,
      video_decoder: null != (eI = null != Y ? Y : (0, a.z_)(null == (c = S(ed, ec)) ? true : c.decoderImplementationName)) ? eI : null,
      audio_capture_sample_rate_mismatch_percent: null != W ? W : null,
      incoming_video_stopped_for_occlusion: !o.w.isIncomingVideoEnabled(),
      bitrate: null != (eT = null == (u = A(es, ed, ec)) ? true : u.bitrate) ? eT : null,
      target_bitrate: es && null != (eS = null == (d = T(ed)) ? true : d.bitrateTarget) ? eS : null,
      fps: null != (eA = D(es, el, ec)) ? eA : null,
      target_fps: el === I.Yn.STREAM && es ? en : null,
      sender_user_id: null != (eC = null == Q ? true : Q.ownerId) ? eC : null,
      stream_region: null != (eN = null == J ? true : J.getRegion()) ? eN : null,
      stream_source_type: es && null != (eR = null == J || null == (h = J.analyticsContext) ? true : h.streamSourceType) ? eR : null,
      num_stream_viewers: null != (eP = null == J || null == (m = J.analyticsContext) ? true : m.numViewers) ? eP : null,
      video_input_resolution_height: es && null != et ? et : null,
      video_input_frame_rate: es && null != en ? en : null,
      screenshare_capture_method: R(ed),
      share_application_name: null != er ? er : null,
      share_application_id: null != ei ? ei : null,
      share_application_executable: null != ea ? ea : null,
      share_application_distributor: null != eo ? eo : null,
      cpu_brand: null != (eD = null == t ? true : t.cpu_brand) ? eD : null,
      cpu_vendor: null != (ew = null == t ? true : t.cpu_vendor) ? ew : null,
      cpu_memory: null != (ex = null == t ? true : t.cpu_memory) ? ex : null,
      gpu_brand: null != (eL = null == t ? true : t.gpu_brand) ? eL : null,
      gpu_count: null != (eM = null == t ? true : t.gpu_count) ? eM : null,
      gpu_memory: null != (ej = null == t ? true : t.gpu_memory) ? ej : null,
      gpu_device_vendor_id: null != (ek = null == t ? true : t.gpu_device_vendor_id) ? ek : null,
      gpu_device_device_id: null != (eU = null == t ? true : t.gpu_device_device_id) ? eU : null,
      gpu_device_sub_sys_id: null != (eG = null == t ? true : t.gpu_device_sub_sys_id) ? eG : null,
      gpu_device_revision: null != (eB = null == t ? true : t.gpu_device_revision) ? eB : null,
      gpu_driver_version: null != (eZ = null == t ? true : t.gpu_driver_version) ? eZ : null,
      cpu_usage: null != (eF = y.Z.getCurrentCPUUsagePercent()) ? eF : null,
      memory_usage: null != (eV = y.Z.getCurrentMemoryUsageKB()) ? eV : null,
      outbound_bitrate_estimate: C(ed),
      inbound_bitrate_estimate: N(ed),
      hardware_enabled: f.Z.getHardwareEncoding(),
      audio_input_device_name: null != K ? K : null == (g = f.Z.getInputDevices()[f.Z.getInputDeviceId()]) ? true : g.name,
      audio_output_device_name: null != z ? z : null == (O = f.Z.getOutputDevices()[f.Z.getOutputDeviceId()]) ? true : O.name,
      video_device_name: null != q ? q : null == (P = f.Z.getVideoDevices()[f.Z.getVideoDeviceId()]) ? true : P.name,
      audio_subsystem: f.Z.getMediaEngine().getAudioSubsystem(),
      automatic_audio_subsystem: f.Z.getSettings().automaticAudioSubsystem,
      audio_layer: f.Z.getMediaEngine().getAudioLayer(),
      audio_input_mode: f.Z.getSettings().mode,
      automatic_audio_input_sensitivity_enabled: f.Z.getSettings().modeOptions.autoThreshold,
      audio_input_sensitivity: f.Z.getSettings().modeOptions.threshold,
      echo_cancellation_enabled: f.Z.getEchoCancellation(),
      noise_suppression_enabled: f.Z.getNoiseSuppression(),
      noise_cancellation_enabled: f.Z.getNoiseCancellation(),
      automatic_gain_control_enabled: f.Z.getAutomaticGainControl(),
      sidechain_compression_enabled: f.Z.getSidechainCompression(),
      input_volume: f.Z.getInputVolume(),
      output_volume: f.Z.getOutputVolume(),
      audio_input_device_count: Object.keys(f.Z.getInputDevices()).length,
      audio_output_device_count: Object.keys(f.Z.getOutputDevices()).length,
      app_hardware_acceleration_enabled: b.Z.getAppHardwareAccelerationEnabled()
    };
    E.default.track(v.rMx.AV_ERROR_REPORTED, eH)
  })
}