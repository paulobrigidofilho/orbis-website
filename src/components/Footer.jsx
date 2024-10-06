import React from 'react'
import styles from './stylesheet.module.css'

export default function Footer() {
  return (
  
    <>
    <div className={styles.aboutUs}>
            <div className={styles.usImg}>
                <h1>About Us</h1>
                <img src="orbislogo.png" alt="Orbis History Maps Logo"/>          
            </div>
        
            <div>
                <p>
                    "At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis praesentium voluptatum deleniti atque corrupti quos dolores et quas molestias excepturi sint occaecati cupiditate non provident, similique sunt in culpa qui officia deserunt mollitia animi, id est laborum et dolorum fuga. Et harum quidem rerum facilis est et expedita distinctio. Nam libero tempore, cum soluta nobis est eligendi optio cumque nihil impedit quo minus id quod maxime placeat facere possimus, omnis voluptas assumenda est, omnis dolor repellendus. Temporibus autem quibusdam et aut officiis debitis aut rerum necessitatibus saepe eveniet ut et voluptates repudiandae sint et molestiae non recusandae. Itaque earum rerum hic tenetur a sapiente delectus, ut aut reiciendis voluptatibus maiores alias consequatur aut perferendis doloribus asperiores repellat."
                </p>    
            </div>
   </div>

    <footer>
      <p>
        &copy; 2021 - Orbis History Maps
        <a target="_blank" href="https://instagram.com/orbishistorymaps"
          ><i className="fa-brands fa-square-instagram fa-lg"></i>
        </a>
      </p>
    </footer>
    </>
  )
}
