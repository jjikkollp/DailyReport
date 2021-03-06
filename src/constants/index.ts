import { stringify } from 'querystring';
import { ua } from '../../config.json';

export const API_PASS = 'https://pass.hust.edu.cn/cas';
export const API_YQTB = 'https://yqtb.hust.edu.cn/infoplus';

export const API_ENTRY_POINT = `${API_YQTB}/form/BKS/start`;
export const API_LOGIN = `${API_PASS}/login`;
export const API_CAPTCHA = `${API_PASS}/code`;
export const API_LOGIN_FINISHED = `${API_YQTB}/login?${stringify({ retUrl: API_ENTRY_POINT })}`;
export const API_START = `${API_YQTB}/interface/start`;
export const API_RENDER = `${API_YQTB}/interface/render`;
export const API_DO_ACTION = `${API_YQTB}/interface/doAction`;

export const USER_AGENT = ua || 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/81.0.4044.138 Safari/537.36';
