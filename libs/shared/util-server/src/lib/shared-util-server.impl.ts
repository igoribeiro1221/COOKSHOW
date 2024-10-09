import { SharedUtilServer } from './shared-util-server';
import * as bcrypt from 'bcrypt';

export class SharedUtilServerImpl extends SharedUtilServer {
  async hash(password: string): Promise<string> {
    const hash = await bcrypt.hash(password, this.salt);
    return hash;
  }

  async compare(password: string, hash: string): Promise<boolean> {
    const result = await bcrypt.compare(password, hash);
    return result;
  }
}
