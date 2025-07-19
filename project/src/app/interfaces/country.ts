export interface Country {
  flags: Flags;
  name: Name;
  cca2: string;
  cca3: string;
  cioc: string;
  region: string;
  population: number;
  capital: string[];
}

export interface Flags {
  png: string;
  svg: string;
  alt: string;
}

export interface Name {
  common: string;
  official: string;
  nativeName: NativeName;
}

export interface NativeName {
  ron?: Ron;
  ara?: Ara;
  fra?: Fra;
  zdj?: Zdj;
  eng?: Eng;
  msa?: Msa;
  pih?: Pih;
  slv?: Slv;
  dan?: Dan;
  kaz?: Kaz;
  rus?: Rus;
  bis?: Bis;
  ukr?: Ukr;
  deu?: Deu;
  bar?: Bar;
  cat?: Cat;
  tsn?: Tsn;
  fao?: Fao;
  jam?: Jam;
  swa?: Swa;
  bjz?: Bjz;
  spa?: Spa;
  mya?: Mya;
  zho?: Zho;
  tam?: Tam;
  slk?: Slk;
  isl?: Isl;
  dzo?: Dzo;
  mkd?: Mkd;
  mlt?: Mlt;
  prs?: Prs;
  pus?: Pus;
  tuk?: Tuk;
  nld?: Nld;
  nfr?: Nfr;
  pap?: Pap;
  ita?: Ita;
  lat?: Lat;
  hmo?: Hmo;
  tpi?: Tpi;
  nya?: Nya;
  hun?: Hun;
  khm?: Khm;
  nno?: Nno;
  nob?: Nob;
  smi?: Smi;
  smo?: Smo;
  fij?: Fij;
  hif?: Hif;
  tha?: Tha;
  mon?: Mon;
  por?: Por;
  pov?: Pov;
  grn?: Grn;
  amh?: Amh;
  kor?: Kor;
  mri?: Mri;
  nzs?: Nzs;
  lao?: Lao;
  run?: Run;
  urd?: Urd;
  hye?: Hye;
  ces?: Ces;
  niu?: Niu;
  fin?: Fin;
  swe?: Swe;
  ltz?: Ltz;
  tvl?: Tvl;
  tir?: Tir;
  nrf?: Nrf;
  ber?: Ber;
  mey?: Mey;
  nor?: Nor;
  nep?: Nep;
  ben?: Ben;
  kir?: Kir;
  mah?: Mah;
  sag?: Sag;
  lav?: Lav;
  uzb?: Uzb;
  ell?: Ell;
  tur?: Tur;
  bos?: Bos;
  hrv?: Hrv;
  srp?: Srp;
  sin?: Sin;
  kon?: Kon;
  lin?: Lin;
  heb?: Heb;
  afr?: Afr;
  her?: Her;
  hgm?: Hgm;
  kwn?: Kwn;
  loz?: Loz;
  ndo?: Ndo;
  kin?: Kin;
  aym?: Aym;
  que?: Que;
  sot?: Sot;
  rar?: Rar;
  lit?: Lit;
  cnr?: Cnr;
  lua?: Lua;
  sqi?: Sqi;
  kat?: Kat;
  jpn?: Jpn;
  som?: Som;
  ton?: Ton;
  hin?: Hin;
  ssw?: Ssw;
  mlg?: Mlg;
  bel?: Bel;
  div?: Div;
  tet?: Tet;
  gle?: Gle;
  arc?: Arc;
  ckb?: Ckb;
  fil?: Fil;
  nbl?: Nbl;
  nso?: Nso;
  tso?: Tso;
  ven?: Ven;
  xho?: Xho;
  zul?: Zul;
  bul?: Bul;
  ind?: Ind;
  crs?: Crs;
  vie?: Vie;
  est?: Est;
  hat?: Hat;
  tgk?: Tgk;
  cal?: Cal;
  cha?: Cha;
  nau?: Nau;
  gsw?: Gsw;
  roh?: Roh;
  fas?: Fas;
  tkl?: Tkl;
  gil?: Gil;
  pau?: Pau;
  pol?: Pol;
  glv?: Glv;
  kal?: Kal;
  bwg?: Bwg;
  kck?: Kck;
  khi?: Khi;
  ndc?: Ndc;
  nde?: Nde;
  sna?: Sna;
  toi?: Toi;
  zib?: Zib;
  mfe?: Mfe;
  aze?: Aze;
}

export interface Ron {
  official: string;
  common: string;
}

export interface Ara {
  official: string;
  common: string;
}

export interface Fra {
  official: string;
  common: string;
}

export interface Zdj {
  official: string;
  common: string;
}

export interface Eng {
  official: string;
  common: string;
}

export interface Msa {
  official: string;
  common: string;
}

export interface Pih {
  official: string;
  common: string;
}

export interface Slv {
  official: string;
  common: string;
}

export interface Dan {
  official: string;
  common: string;
}

export interface Kaz {
  official: string;
  common: string;
}

export interface Rus {
  official: string;
  common: string;
}

export interface Bis {
  official: string;
  common: string;
}

export interface Ukr {
  official: string;
  common: string;
}

export interface Deu {
  official: string;
  common: string;
}

export interface Bar {
  official: string;
  common: string;
}

export interface Cat {
  official: string;
  common: string;
}

export interface Tsn {
  official: string;
  common: string;
}

export interface Fao {
  official: string;
  common: string;
}

export interface Jam {
  official: string;
  common: string;
}

export interface Swa {
  official: string;
  common: string;
}

export interface Bjz {
  official: string;
  common: string;
}

export interface Spa {
  official: string;
  common: string;
}

export interface Mya {
  official: string;
  common: string;
}

export interface Zho {
  official: string;
  common: string;
}

export interface Tam {
  official: string;
  common: string;
}

export interface Slk {
  official: string;
  common: string;
}

export interface Isl {
  official: string;
  common: string;
}

export interface Dzo {
  official: string;
  common: string;
}

export interface Mkd {
  official: string;
  common: string;
}

export interface Mlt {
  official: string;
  common: string;
}

export interface Prs {
  official: string;
  common: string;
}

export interface Pus {
  official: string;
  common: string;
}

export interface Tuk {
  official: string;
  common: string;
}

export interface Nld {
  official: string;
  common: string;
}

export interface Nfr {
  official: string;
  common: string;
}

export interface Pap {
  official: string;
  common: string;
}

export interface Ita {
  official: string;
  common: string;
}

export interface Lat {
  official: string;
  common: string;
}

export interface Hmo {
  official: string;
  common: string;
}

export interface Tpi {
  official: string;
  common: string;
}

export interface Nya {
  official: string;
  common: string;
}

export interface Hun {
  official: string;
  common: string;
}

export interface Khm {
  official: string;
  common: string;
}

export interface Nno {
  official: string;
  common: string;
}

export interface Nob {
  official: string;
  common: string;
}

export interface Smi {
  official: string;
  common: string;
}

export interface Smo {
  official: string;
  common: string;
}

export interface Fij {
  official: string;
  common: string;
}

export interface Hif {
  official: string;
  common: string;
}

export interface Tha {
  official: string;
  common: string;
}

export interface Mon {
  official: string;
  common: string;
}

export interface Por {
  official: string;
  common: string;
}

export interface Pov {
  official: string;
  common: string;
}

export interface Grn {
  official: string;
  common: string;
}

export interface Amh {
  official: string;
  common: string;
}

export interface Kor {
  official: string;
  common: string;
}

export interface Mri {
  official: string;
  common: string;
}

export interface Nzs {
  official: string;
  common: string;
}

export interface Lao {
  official: string;
  common: string;
}

export interface Run {
  official: string;
  common: string;
}

export interface Urd {
  official: string;
  common: string;
}

export interface Hye {
  official: string;
  common: string;
}

export interface Ces {
  official: string;
  common: string;
}

export interface Niu {
  official: string;
  common: string;
}

export interface Fin {
  official: string;
  common: string;
}

export interface Swe {
  official: string;
  common: string;
}

export interface Ltz {
  official: string;
  common: string;
}

export interface Tvl {
  official: string;
  common: string;
}

export interface Tir {
  official: string;
  common: string;
}

export interface Nrf {
  official: string;
  common: string;
}

export interface Ber {
  official: string;
  common: string;
}

export interface Mey {
  official: string;
  common: string;
}

export interface Nor {
  official: string;
  common: string;
}

export interface Nep {
  official: string;
  common: string;
}

export interface Ben {
  official: string;
  common: string;
}

export interface Kir {
  official: string;
  common: string;
}

export interface Mah {
  official: string;
  common: string;
}

export interface Sag {
  official: string;
  common: string;
}

export interface Lav {
  official: string;
  common: string;
}

export interface Uzb {
  official: string;
  common: string;
}

export interface Ell {
  official: string;
  common: string;
}

export interface Tur {
  official: string;
  common: string;
}

export interface Bos {
  official: string;
  common: string;
}

export interface Hrv {
  official: string;
  common: string;
}

export interface Srp {
  official: string;
  common: string;
}

export interface Sin {
  official: string;
  common: string;
}

export interface Kon {
  official: string;
  common: string;
}

export interface Lin {
  official: string;
  common: string;
}

export interface Heb {
  official: string;
  common: string;
}

export interface Afr {
  official: string;
  common: string;
}

export interface Her {
  official: string;
  common: string;
}

export interface Hgm {
  official: string;
  common: string;
}

export interface Kwn {
  official: string;
  common: string;
}

export interface Loz {
  official: string;
  common: string;
}

export interface Ndo {
  official: string;
  common: string;
}

export interface Kin {
  official: string;
  common: string;
}

export interface Aym {
  official: string;
  common: string;
}

export interface Que {
  official: string;
  common: string;
}

export interface Sot {
  official: string;
  common: string;
}

export interface Rar {
  official: string;
  common: string;
}

export interface Lit {
  official: string;
  common: string;
}

export interface Cnr {
  official: string;
  common: string;
}

export interface Lua {
  official: string;
  common: string;
}

export interface Sqi {
  official: string;
  common: string;
}

export interface Kat {
  official: string;
  common: string;
}

export interface Jpn {
  official: string;
  common: string;
}

export interface Som {
  official: string;
  common: string;
}

export interface Ton {
  official: string;
  common: string;
}

export interface Hin {
  official: string;
  common: string;
}

export interface Ssw {
  official: string;
  common: string;
}

export interface Mlg {
  official: string;
  common: string;
}

export interface Bel {
  official: string;
  common: string;
}

export interface Div {
  official: string;
  common: string;
}

export interface Tet {
  official: string;
  common: string;
}

export interface Gle {
  official: string;
  common: string;
}

export interface Arc {
  official: string;
  common: string;
}

export interface Ckb {
  official: string;
  common: string;
}

export interface Fil {
  official: string;
  common: string;
}

export interface Nbl {
  official: string;
  common: string;
}

export interface Nso {
  official: string;
  common: string;
}

export interface Tso {
  official: string;
  common: string;
}

export interface Ven {
  official: string;
  common: string;
}

export interface Xho {
  official: string;
  common: string;
}

export interface Zul {
  official: string;
  common: string;
}

export interface Bul {
  official: string;
  common: string;
}

export interface Ind {
  official: string;
  common: string;
}

export interface Crs {
  official: string;
  common: string;
}

export interface Vie {
  official: string;
  common: string;
}

export interface Est {
  official: string;
  common: string;
}

export interface Hat {
  official: string;
  common: string;
}

export interface Tgk {
  official: string;
  common: string;
}

export interface Cal {
  official: string;
  common: string;
}

export interface Cha {
  official: string;
  common: string;
}

export interface Nau {
  official: string;
  common: string;
}

export interface Gsw {
  official: string;
  common: string;
}

export interface Roh {
  official: string;
  common: string;
}

export interface Fas {
  official: string;
  common: string;
}

export interface Tkl {
  official: string;
  common: string;
}

export interface Gil {
  official: string;
  common: string;
}

export interface Pau {
  official: string;
  common: string;
}

export interface Pol {
  official: string;
  common: string;
}

export interface Glv {
  official: string;
  common: string;
}

export interface Kal {
  official: string;
  common: string;
}

export interface Bwg {
  official: string;
  common: string;
}

export interface Kck {
  official: string;
  common: string;
}

export interface Khi {
  official: string;
  common: string;
}

export interface Ndc {
  official: string;
  common: string;
}

export interface Nde {
  official: string;
  common: string;
}

export interface Sna {
  official: string;
  common: string;
}

export interface Toi {
  official: string;
  common: string;
}

export interface Zib {
  official: string;
  common: string;
}

export interface Mfe {
  official: string;
  common: string;
}

export interface Aze {
  official: string;
  common: string;
}
