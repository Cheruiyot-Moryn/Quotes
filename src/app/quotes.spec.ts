import { Quotes } from './quotes';

describe('Quotes', () => {
  it('should create an instance', () => {
    expect( new Quotes('How you love yourself is how you teach others to love you.','Rupi Kaur','Stephanie Osmanski', new Date(2022,2,10),2,1)).toBeTruthy();
  });
});
