# This script helps to read mails.

import getpass
import imaplib
import socket

email = "shravankumarshetty9892@gmail.com"
password = getpass.getpass('Enter your password:\n')
server = "imap.google.com"
port = 993

mail = imaplib.IMAP4_SSL(host=server, port=port)
mail.login(email, password)
mail.select(mailbox="INBOX")