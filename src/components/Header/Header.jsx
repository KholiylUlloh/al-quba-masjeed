import React from 'react'
import { DailyAnn, Date, PrayerTimeTab, Wrap } from './styled'

const Header = () => {
  return (
    <Wrap>
        <DailyAnn>
          <Date>
              <div>14<sup>th</sup>April 2022 · 13 Ramadan 1443</div>
              <div className='special'>JUM'A KHUTBA 13:15 · ISHA  TARAWIH 22:00</div>
          </Date>
          <PrayerTimeTab>
            <table>
              <thead>
                <tr>
                    <th></th>
                    <th>Fajr</th>
                    <th>Zuhr</th>
                    <th>Asr</th>
                    <th>Maghrib</th>
                    <th>Isha</th>
                  </tr>
              </thead>
              <tbody>
                <tr>
                    <th>Jamaat</th>
                    <td>04:45</td>
                    <td>04:45</td>
                    <td>04:45</td>
                    <td>04:45</td>
                    <td>04:45</td>
                  </tr>
                  <tr>
                    <th>Begins</th>
                    <td>04:25</td>
                    <td>04:25</td>
                    <td>04:25</td>
                    <td>04:25</td>
                    <td>04:25</td>
                  </tr>
              </tbody>
            </table>
          </PrayerTimeTab>
        </DailyAnn>
    </Wrap>
  )
}

export default Header